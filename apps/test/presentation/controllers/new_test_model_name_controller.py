from apps.test.application.services.new_test_model_name_service import NewTestModelNameService
from apps.test.domain.models.new_test_model_name_model import NewTestModelNameModel

class NewTestModelNameController:
    def __init__(self):
        super().__init__()
        self.new_test_model_name_service = NewTestModelNameService()

    def query(self, new_test_model_name_model: NewTestModelNameModel):
        return self.new_test_model_name_service.query(new_test_model_name_model)
    def upload(self, new_test_model_name_model: NewTestModelNameModel):
        return self.new_test_model_name_service.upload(new_test_model_name_model)
    def post(self, new_test_model_name_model: NewTestModelNameModel):
        return self.new_test_model_name_service.post(new_test_model_name_model)
    def get(self, new_test_model_name_model: NewTestModelNameModel):
        return self.new_test_model_name_service.get(new_test_model_name_model)
    def put(self, new_test_model_name_model: NewTestModelNameModel):
        return self.new_test_model_name_service.put(new_test_model_name_model)
    def delete(self, new_test_model_name_model: NewTestModelNameModel):
        return self.new_test_model_name_service.delete(new_test_model_name_model)
    def post_document(self, new_test_model_name_model: NewTestModelNameModel):
        return self.new_test_model_name_service.post_document(new_test_model_name_model)
    def delete_document(self, new_test_model_name_model: NewTestModelNameModel):
        return self.new_test_model_name_service.delete_document(new_test_model_name_model)
    def new_method(self, new_test_model_name_model: NewTestModelNameModel):
        return self.new_test_model_name_service.new_method(new_test_model_name_model)
    def old_external_method(self, new_test_model_name_model: NewTestModelNameModel):
        return self.new_test_model_name_service.old_external_method(new_test_model_name_model)
