Sylph
=====

Sylph - Ghost Theme

Sylph is a minimalistic responsive theme built for Ghost (http://ghost.org). As the functionality of Ghost grows so will some of the functionality within the theme.

Features
========
- Easy to Use
- Fully Responsive
- Responsive Video
- Feature Image/Video/Audio Support
- Parallax Cover Image
- Disqus Comments
- Social Network Links
- Custom Twitter widget
- FontAwesome Icons
- Youtube, Vimeo, and Soundcloud Support

Install & Troubleshooting
=========================

BEFORE YOU UPLOAD:

Twitter Widget:
* If you do not set up the widget ID then the widget will not be displayed

1) Open https://twitter.com/settings/widgets (you will need to log into your account)
2) If you already have a widget create click "Edit" next to the widget of your choice, if not select "Create New"
- If you already have a widget skip step #3 -
3) Create your widget and select "Create New"
4) Your URL will look something like this: https://twitter.com/settings/widgets/408185639436169217/edit
5) Find the series of numbers after /widgets/ and copy them: https://twitter.com/settings/widgets/#####/edit
6) Open sylph/partials/twitter.hbs
7) Find data-twitter-id="your-widget-number" and replace "your-widget-number" with the widget ID#
8) Save and close twitter.hbs

Social Network Links:
* If you don't update the url the link will not show
* If no links are shown the icon to open the navigation list of them will not show.

1) Open sylph/partials/sociallinks.hbs
2) For each link you want to show find href="your/link/url" and put in yout URL

NOW YOU ARE READY TO INSTALL THE THEME

Install Theme:
1) Upload Sylph theme folder to root/content/themes/
2) Restart the Ghost service on your server
3) Login to your admin section (http://yoururl/ghost/)
4) Go to setting/general/ and choose Sylph from the "Theme" drop down & save
5) Restart the Ghost service on your server again*

* The second restart is because I have noticed that override partials such as the one
Sylph uses for it's pagination do not always take effect by just switchign the theme.



 


Included Scripts & Resources
============================
- Fitvids.js (http://fitvidsjs.com/)
- Font Awesome (http://fontawesome.io/)
- Skrollr (http://prinzhorn.github.io/skrollr/)
- Twitter Fetcher (http://jasonmayes.com/projects/twitterApi/)
