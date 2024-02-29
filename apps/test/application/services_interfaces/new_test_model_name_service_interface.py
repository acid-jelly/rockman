from abc import ABC, abstractmethod
from apps.test.domain.models.new_test_model_name_model import NewTestModelNameModel

class NewTestModelNameServiceInterface(ABC):
    def __init__(self):
        super().__init__()


    @abstractmethod
    def query(self, new_test_model_name_model: NewTestModelNameModel):
        return new_test_model_name_model
    @abstractmethod
    def upload(self, new_test_model_name_model: NewTestModelNameModel):
        return new_test_model_name_model
    @abstractmethod
    def post(self, new_test_model_name_model: NewTestModelNameModel):
        return new_test_model_name_model
    @abstractmethod
    def get(self, new_test_model_name_model: NewTestModelNameModel):
        return new_test_model_name_model
    @abstractmethod
    def put(self, new_test_model_name_model: NewTestModelNameModel):
        return new_test_model_name_model
    @abstractmethod
    def delete(self, new_test_model_name_model: NewTestModelNameModel):
        return new_test_model_name_model
    @abstractmethod
    def post_document(self, new_test_model_name_model: NewTestModelNameModel):
        return new_test_model_name_model
    @abstractmethod
    def delete_document(self, new_test_model_name_model: NewTestModelNameModel):
        return new_test_model_name_model
    @abstractmethod
    def new_method(self, new_test_model_name_model: NewTestModelNameModel):
        return new_test_model_name_model
    @abstractmethod
    def old_external_method(self, new_test_model_name_model: NewTestModelNameModel):
        return new_test_model_name_model
