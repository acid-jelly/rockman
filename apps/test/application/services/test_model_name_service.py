from apps.test.application.services_interfaces.test_model_name_service_interface import TestModelNameServiceInterface
from apps.test.infrastructure.repositories.test_model_name_repository import TestModelNameRepository
from apps.test.domain.models.test_model_name_model import TestModelNameModel

class TestModelNameService(TestModelNameServiceInterface):
    def __init__(self):
        super().__init__()
        self.test_model_name_repository = TestModelNameRepository()

    def query(self, test_model_name_model: TestModelNameModel):
        return self.test_model_name_repository.query(test_model_name_model)
    def upload(self, test_model_name_model: TestModelNameModel):
        return self.test_model_name_repository.upload(test_model_name_model)
    def post(self, test_model_name_model: TestModelNameModel):
        return self.test_model_name_repository.post(test_model_name_model)
    def get(self, test_model_name_model: TestModelNameModel):
        return self.test_model_name_repository.get(test_model_name_model)
    def put(self, test_model_name_model: TestModelNameModel):
        return self.test_model_name_repository.put(test_model_name_model)
    def delete(self, test_model_name_model: TestModelNameModel):
        return self.test_model_name_repository.delete(test_model_name_model)
    def get_product(self, test_model_name_model: TestModelNameModel):
        return self.test_model_name_repository.get_product(test_model_name_model)
    def delete_product(self, test_model_name_model: TestModelNameModel):
        return self.test_model_name_repository.delete_product(test_model_name_model)
