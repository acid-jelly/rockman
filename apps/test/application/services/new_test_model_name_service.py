from apps.test.application.services_interfaces.new_test_model_name_service_interface import NewTestModelNameServiceInterface
from apps.test.infrastructure.repositories.new_test_model_name_repository import NewTestModelNameRepository
from apps.test.domain.models.new_test_model_name_model import NewTestModelNameModel

class NewTestModelNameService(NewTestModelNameServiceInterface):
    def __init__(self):
        super().__init__()
        self.new_test_model_name_repository = NewTestModelNameRepository()

    def query(self, new_test_model_name_model: NewTestModelNameModel):
        return self.new_test_model_name_repository.query(new_test_model_name_model)
    def upload(self, new_test_model_name_model: NewTestModelNameModel):
        return self.new_test_model_name_repository.upload(new_test_model_name_model)
    def post(self, new_test_model_name_model: NewTestModelNameModel):
        return self.new_test_model_name_repository.post(new_test_model_name_model)
    def get(self, new_test_model_name_model: NewTestModelNameModel):
        return self.new_test_model_name_repository.get(new_test_model_name_model)
    def put(self, new_test_model_name_model: NewTestModelNameModel):
        return self.new_test_model_name_repository.put(new_test_model_name_model)
    def delete(self, new_test_model_name_model: NewTestModelNameModel):
        return self.new_test_model_name_repository.delete(new_test_model_name_model)
    def post_document(self, new_test_model_name_model: NewTestModelNameModel):
        return self.new_test_model_name_repository.post_document(new_test_model_name_model)
    def delete_document(self, new_test_model_name_model: NewTestModelNameModel):
        return self.new_test_model_name_repository.delete_document(new_test_model_name_model)
    def new_method(self, new_test_model_name_model: NewTestModelNameModel):
        return self.new_test_model_name_repository.new_method(new_test_model_name_model)
    def old_external_method(self, new_test_model_name_model: NewTestModelNameModel):
        return self.new_test_model_name_repository.old_external_method(new_test_model_name_model)
