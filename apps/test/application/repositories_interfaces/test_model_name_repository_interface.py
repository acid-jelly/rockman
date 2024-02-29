from abc import ABC, abstractmethod
from apps.test.domain.models.test_model_name_model import TestModelNameModel

class TestModelNameRepositoryInterface(ABC):
    def __init__(self):
        super().__init__()


    @abstractmethod
    def query(self, test_model_name_model: TestModelNameModel):
        return test_model_name_model
    @abstractmethod
    def upload(self, test_model_name_model: TestModelNameModel):
        return test_model_name_model
    @abstractmethod
    def post(self, test_model_name_model: TestModelNameModel):
        return test_model_name_model
    @abstractmethod
    def get(self, test_model_name_model: TestModelNameModel):
        return test_model_name_model
    @abstractmethod
    def put(self, test_model_name_model: TestModelNameModel):
        return test_model_name_model
    @abstractmethod
    def delete(self, test_model_name_model: TestModelNameModel):
        return test_model_name_model
    @abstractmethod
    def get_product(self, test_model_name_model: TestModelNameModel):
        return test_model_name_model
    @abstractmethod
    def delete_product(self, test_model_name_model: TestModelNameModel):
        return test_model_name_model
