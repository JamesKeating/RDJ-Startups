# howdy/views.py
from django.views.generic import TemplateView
from django.views.generic import View
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from .forms import UserForm

class HomePageView(TemplateView):
    template_name = "index.html"


class BlogPageView(TemplateView):
    template_name = "blog.html"


class VehiclePageView(TemplateView):
    template_name = "choosing-the-right-business-vehicle.html"


class CookiePageView(TemplateView):
    template_name = "cookie-policy.html"


class DataProtectionPageView(TemplateView):
    template_name = "data-protection.html"


class FinancingPageView(TemplateView):
    template_name = "financing-your-startup.html"


class ContactPageView(TemplateView):
    template_name = "get-in-touch.html"


class GettingStartedPageView(TemplateView):
    template_name = "getting-started.html"


class IntellectualPropertyPageView(TemplateView):
    template_name = "intellectual-property.html"


class KeyContractsPageView(TemplateView):
    template_name = "key-contracts.html"


class LegalTemplatesPageView(TemplateView):
    template_name = "legal-templates.html"


class LoginPageView(TemplateView):
    template_name = "login.html"


class MailToPageView(TemplateView):
    template_name = "mailto_startups@rdj.html"


class MeetTeamPageView(TemplateView):
    template_name = "meet-the-team.html"


class ApproachPageView(TemplateView):
    template_name = "our-approach.html"


class PrivacyPageView(TemplateView):
    template_name = "privacy.html"


class SearchPageView(TemplateView):
    template_name = "search.html"


class SiteMapPageView(TemplateView):
    template_name = "sitemap.html"


class TOCPageView(TemplateView):
    template_name = "standard-terms-and-conditions-for-seed_venture-investment.html"


class StartupAcademyPageView(TemplateView):
    template_name = "startup-academy.html"


class StatupGuidePageView(TemplateView):
    template_name = "startup-guide.html"


class TaxPageView(TemplateView):
    template_name = "tax.html"


class TermsPageView(TemplateView):
    template_name = "terms-of-use.html"


class FAQPageView(TemplateView):
    template_name = "faqs.html"


class UserFormView(View):
    form_class = UserForm
    template_name = 'registration-form.html'

    def get(self, request):
        form = self.form_class(None)
        return render(request, self.template_name, {'form': form})

    #process form
    def post(self, request):
        form = self.form_class(request.POST)

        if form.is_valid():
            user = form.save(commit=False)

            #clean normalized data
            username = form.cleaned_data['username']
            email = form.cleaned_data['email']
            password = form.cleaned_data['password']
            user.set_password(password)
            user.save()

            #returns USer objecets if cred are correct
            user = authenticate(username=username, password=password)
            print(user)
            if user is not None:
                if user.is_active:
                    login(request, user)
                    print('here')
                    return redirect('/')

        return render(request, self.template_name, {'form': form})