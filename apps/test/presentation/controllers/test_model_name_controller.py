from apps.test.application.services.test_model_name_service import TestModelNameService
from apps.test.domain.models.test_model_name_model import TestModelNameModel

class TestModelNameController:
    def __init__(self):
        super().__init__()
        self.test_model_name_service = TestModelNameService()

    def query(self, test_model_name_model: TestModelNameModel):
        return self.test_model_name_service.query(test_model_name_model)
    def upload(self, test_model_name_model: TestModelNameModel):
        return self.test_model_name_service.upload(test_model_name_model)
    def post(self, test_model_name_model: TestModelNameModel):
        return self.test_model_name_service.post(test_model_name_model)
    def get(self, test_model_name_model: TestModelNameModel):
        return self.test_model_name_service.get(test_model_name_model)
    def put(self, test_model_name_model: TestModelNameModel):
        return self.test_model_name_service.put(test_model_name_model)
    def delete(self, test_model_name_model: TestModelNameModel):
        return self.test_model_name_service.delete(test_model_name_model)
    def get_product(self, test_model_name_model: TestModelNameModel):
        return self.test_model_name_service.get_product(test_model_name_model)
    def delete_product(self, test_model_name_model: TestModelNameModel):
        return self.test_model_name_service.delete_product(test_model_name_model)
