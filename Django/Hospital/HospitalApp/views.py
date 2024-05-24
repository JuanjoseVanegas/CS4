from django.views import View
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
import HospitalApp.Views.adminView as adminView


# Create your views here.

# ADMIN
class PersonView(View):
    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args: any, **kwargs: any):
        return super().dispatch(request, *args, **kwargs)

    def get(self, request, cedula = None):
        return adminView.get(self, request, cedula)

    def post(self, request):
        return adminView.post(self, request)

    def put(self, request, cedula = None):
        return adminView.put(self,request, cedula)

    def delete(self, request, cedula = None):
        return adminView.delete(self, request, cedula)
