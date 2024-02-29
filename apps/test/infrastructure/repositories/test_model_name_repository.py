from apps.test.application.repositories_interfaces.test_model_name_repository_interface import TestModelNameRepositoryInterface
from apps.test.domain.models.test_model_name_model import TestModelNameModel

class TestModelNameRepository(TestModelNameRepositoryInterface):
    def __init__(self):
        super().__init__()

    def query(self, test_model_name_model: TestModelNameModel):
        return test_model_name_model
    def upload(self, test_model_name_model: TestModelNameModel):
        return test_model_name_model
    def post(self, test_model_name_model: TestModelNameModel):
        return test_model_name_model
    def get(self, test_model_name_model: TestModelNameModel):
        return test_model_name_model
    def put(self, test_model_name_model: TestModelNameModel):
        return test_model_name_model
    def delete(self, test_model_name_model: TestModelNameModel):
        return test_model_name_model
    def get_product(self, test_model_name_model: TestModelNameModel):
        return test_model_name_model
    def delete_product(self, test_model_name_model: TestModelNameModel):
        return test_model_name_model
