DIKARIS WEBSITE: SETUP GUIDE
============================

This folder is the complete website. It is plain HTML, CSS and JavaScript,
so it works on any web host (for example Hostinger, TransIP, Strato, Netlify
or Vercel). No database or installation is needed.


1. WHAT IS IN THIS FOLDER
-------------------------
index.html           English homepage        -> dikaris.nl/
privacy.html         English privacy policy  -> dikaris.nl/privacy.html
nl/index.html        Dutch homepage          -> dikaris.nl/nl/
nl/privacy.html      Dutch privacy policy    -> dikaris.nl/nl/privacy.html
favicon.svg          Browser tab icon (the Dikaris brand mark)
assets/css/          Styles
assets/js/main.js    Mobile menu and contact form
assets/img/          Photos, icons, owl image and brand pattern
assets/fonts/        Empty for now (see step 4)


2. PUT IT ONLINE
----------------
Upload EVERYTHING in this folder (not the folder itself) to the public root of
your hosting, usually called "public_html", "www" or "htdocs". Keep the folder
structure exactly as it is.

Easiest option if you have no hosting yet: Netlify (netlify.com, free plan).
Create an account, choose "Add new site" > "Deploy manually" and drag this
folder onto the page. Then connect your domain dikaris.nl in the site settings.

Make sure HTTPS (an SSL certificate) is switched on. Most hosts do this for
free with one click. The privacy policy states that connections are encrypted.


3. MAKE THE CONTACT FORM SEND EMAILS
------------------------------------
Out of the box, pressing "Send enquiry" opens the visitor's own email app with
the message ready to send to dimitar.rangelov@dikaris.nl. That works without
any setup, but some visitors do not have an email app configured.

To receive form messages directly, use a free form service such as Formspree:
  a. Sign up at formspree.io with dimitar.rangelov@dikaris.nl and create a form.
  b. Copy the form URL it gives you (looks like https://formspree.io/f/abcdwxyz).
  c. In index.html AND nl/index.html, find:   data-endpoint=""
     and paste the URL between the quotes:    data-endpoint="https://formspree.io/f/abcdwxyz"
  d. Upload the two files again.
If you use a form service, it processes the form data for you. Check that it
offers a data processing agreement (Formspree does) to keep the privacy policy
accurate.


4. HOST THE FONTS YOURSELF (RECOMMENDED FOR PRIVACY)
----------------------------------------------------
Right now the fonts load from Google Fonts, which sends visitors' IP addresses
to Google. Under EU privacy rules it is better to host them yourself:
  a. Go to https://gwfh.mranftl.com/fonts (google-webfonts-helper).
  b. Download "Hanken Grotesk" (weights 300, 400, 500, 600) and
     "Libertinus Serif" (400, 400 italic, 600) as woff2 files.
  c. Put the files in assets/fonts/ and rename them to match the names in
     assets/css/styles.css (top of the file), or edit the names there.
     Tip: google-webfonts-helper also gives you the ready-made CSS to paste.
  d. In assets/css/styles.css remove the comment markers /* and */ around the
     @font-face block.
  e. In all four HTML files, delete the three lines below the comment
     "Fonts: loaded from Google Fonts".
Both fonts are free to use under the SIL Open Font License.


5. BEFORE YOU GO LIVE: CHECKLIST
--------------------------------
[ ] Domain: the pages assume the address https://dikaris.nl. If you use
    another address (for example www.dikaris.nl), replace "https://dikaris.nl"
    in the <head> of the four HTML files.
[ ] Social share image: add a 1200 x 630 pixel image named og-image.jpg to
    assets/img/ (one is included; replace it if you like).
[ ] Read the privacy policy once more. If you add analytics (Google Analytics,
    etc.) you must update it and add a cookie banner.
[ ] Check with the KvK or your accountant whether you need to show your KvK
    number on the website.
[ ] Have a native Dutch speaker proofread the Dutch pages.
[ ] Stock photos: keep the licence certificates from the IMAGES folder on file.


6. MAKING CHANGES LATER
-----------------------
Open any .html file in a text editor (for example VS Code, which is free), change
the text, save, and upload the file again. The text sits between the tags, for
example: <h2 ...>From the first trace to the final report.</h2>
Remember to change both the English and the Dutch page.
