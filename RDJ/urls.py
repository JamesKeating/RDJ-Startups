from django.conf.urls import url

from RDJ import views

urlpatterns = [
    url(r'^$', views.HomePageView.as_view()),
    url(r'^blog/$', views.BlogPageView.as_view()),
    url(r'^choosing-the-right-business-vehicle/$', views.VehiclePageView.as_view()),
    url(r'^cookie-policy/$', views.CookiePageView.as_view()),
    url(r'^data-protection/$', views.DataProtectionPageView.as_view()),
    url(r'^financing-your-startup/$', views.FinancingPageView.as_view()),
    url(r'^get-in-touch/$', views.ContactPageView.as_view()),
    url(r'^getting-started/$', views.GettingStartedPageView.as_view()),
    url(r'^intellectual-property/$', views.IntellectualPropertyPageView.as_view()),
    url(r'^key-contracts/$', views.KeyContractsPageView.as_view()),
    url(r'^legal-templates/$', views.LegalTemplatesPageView.as_view()),
    url(r'^login/$', views.LoginPageView.as_view()),
    url(r'^faqs/$', views.FAQPageView.as_view()),
    url(r'^mailto_startups@rdj/$', views.MailToPageView.as_view()),
    url(r'^meet-the-team/$', views.MeetTeamPageView.as_view()),
    url(r'^our-approach/$', views.ApproachPageView.as_view()),
    url(r'^privacy/$', views.PrivacyPageView.as_view()),
    url(r'^search/$', views.SearchPageView.as_view()),
    url(r'^sitemap/$', views.SiteMapPageView.as_view()),
    url(r'^standard-terms-and-conditions-for-seed_venture-investment/$', views.TOCPageView.as_view()),
    url(r'^startup-academy/$', views.StartupAcademyPageView.as_view()),
    url(r'^startup-guide/$', views.StatupGuidePageView.as_view()),
    url(r'^tax/$', views.TaxPageView.as_view()),
    url(r'^terms-of-use/$', views.TermsPageView.as_view()),
    url(r'^registration/$', views.UserFormView.as_view()),
]