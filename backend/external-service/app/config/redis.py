import jsonpickle
import redis

from ..config.config import REDIS_HOST, REDIS_PORT, REDIS_PASSWORD
from ..config.logger import setup_logger

logger = setup_logger("app")


class RedisHandler:
    _instances = {}  # 인스턴스 목록

    @classmethod
    def initialize(cls, db_numbers):
        """서버 시작 시 여러 DB에 대한 연결을 초기화"""
        for db_number in db_numbers:
            cls.get_instance(db_number)
        logger.info(f"Redis 서비스 초기화 완료. 연결된 DB : {db_numbers}")

    @classmethod
    def get_instance(cls, db_number):
        if db_number not in cls._instances:
            cls._instances[db_number] = cls.create_instance(db_number)
        return cls._instances[db_number]

    @classmethod
    def create_instance(cls, db_number):
        instance = cls.__new__(cls)
        instance.redis_client = redis.StrictRedis(
            host=REDIS_HOST, port=REDIS_PORT, db=db_number, password=REDIS_PASSWORD
        )
        instance.db = db_number
        return instance

    def __init__(cls, *args, **kwargs):
        pass

    def set(self, key: str, value, expiration: int = None):
        """expiration이 유효한 양의 정수일 경우에만 만료 시간을 설정합니다"""
        self.redis_client.set(key, jsonpickle.encode(value))

        if expiration is not None and isinstance(expiration, int) and expiration > 0:
            self.redis_client.expire(key, expiration)
            logger.info(
                f"Redis(DB:{self.db})에 키 저장: {key}, 만료 시간: {expiration}초"
            )
        else:
            logger.info(f"Redis(DB:{self.db})에 키 저장: {key}, 만료 시간: 없음")

    def get(self, key: str):
        value = self.redis_client.get(key)
        if value:
            logger.info(f"Redis(DB:{self.db})에서 키 조회 성공: {key}")
            try:
                return jsonpickle.decode(value)
            except:
                return value
        else:
            logger.info(f"Redis(DB:{self.db})에서 키 조회 실패: {key}")

    def get_all_keys(self):
        keys = self.redis_client.keys("*")
        logger.info(f"Redis(DB:{self.db})의 모든 키 조회: {len(keys)}개")
        return keys

    def delete(self, key: str):
        try:
            if self.redis_client.exists(key):
                self.redis_client.delete(key)
                logger.info(f"Redis(DB:{self.db})의 키 삭제 성공 : {key}")
                return True
            else:
                logger.info(f"Redis(DB:{self.db})의 키 삭제 실패 : {key}")
                return False
        except Exception as e:
            logger.error(
                f"Redis(DB:{self.db})의 키 '{key}' 삭제 중 오류 발생: {str(e)}"
            )
            return False

    def lpush(self, key: str, value):
        """리스트의 왼쪽(앞)에 값을 추가합니다."""
        existing_data = self.get(key)
        if existing_data is None:
            chat_history = []
        else:
            chat_history = existing_data

        chat_history.insert(0, value)

        self.set(key, chat_history)
        logger.info(f"Redis(DB:{self.db})의 키 {key}에 값 추가 (lpush)")
        return len(chat_history)


#######################################################################
RedisHandler.initialize([0, 1, 2, 3, 4, 5, 6, 7, 8])

r_api_keys = RedisHandler.get_instance(0)
r_api_data = RedisHandler.get_instance(1)
r_tts_audio = RedisHandler.get_instance(2)
r_tts_hash = RedisHandler.get_instance(3)
r_tts_ai = RedisHandler.get_instance(4)
r_chat_credits = RedisHandler.get_instance(5)
r_chat_log = RedisHandler.get_instance(6)
r_signal_token = RedisHandler.get_instance(7)
r_signal_log = RedisHandler.get_instance(8)
