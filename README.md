# Application Script for Linux

In this repository we are creating an application link in Ubuntu OS, which will give us a link in our desktop similar than an app, ideal for host projects like Web Applications, however in this sample we are going to launch a Chromium web app with a custom loader in a kiosk mode (restricted mode). Feel free to edit the script line of chromium to customize this up to your needs:

```sh
[Desktop Entry]
Version=1.0.0
Encoding=UTF-8
Name=Catalogo Cash
Type=Application
Icon=/opt/app/loader/assets/icon.png
Exec=/usr/bin/chromium-browser --window-size=1920,1080 --start-fullscreen --kiosk --incognito --noerrdialogs --disable-translate --no-first-run --fast --fast-start --disable-infobars --disable-features=TranslateUI --disk-cache-dir=/dev/null  --password-store=basic  --window-position=0,0 file:///opt/app/loader/index.html &
```

- **Version:** Indicate the application version
- **Encoding:** Web encoding check in wikipedia for more info.
- **Name:** Provide your application name
- **Type:** Provide the kind of script Application in this case
- **Icon:** Locate the icon path, fro this example we are going to use the assets.
- **Exec:** This is where the magic comes up, feel free to edit it on your needs, checkout the chromium api for more information.


## Chrome exec command

If you want to analyze what I am passing in to this exec command:

```bash
/usr/bin/chromium-browser \
    --window-size=1920,1080 \
    --start-fullscreen \
    --kiosk \
    --incognito \
    --noerrdialogs \
    --disable-translate \
    --no-first-run \
    --fast \
    --fast-start \
    --disable-infobars \
    --disable-features=TranslateUI \
    --disk-cache-dir=/dev/null  \
    --password-store=basic  \
    --window-position=0,0 file:///opt/app/loader/index.html &
```

## Loader project
```
.
├── assets
│   └── icon.png
├── index.html
├── main.js
├── README.md
├── scripts
│   └── catalogo-cash.desktop
└── style.css
```

As you can see this structure gives yuo an idea of the architecture is built. This is really basic HTML project where has a typical HTML, CSS and Javascript file.

The HTML host the browser tags and calls to `main.js` script file to load all Javascript.

In the `main.js` file you have counter down configuration.

### Counter setup
```js
...
let countdown = 5;
const APP_URL = 'http://localhost/';
...
```

 Feel free to change the variable countdown up to your needs to setup a higher / lower counting down and to point it to your application URL.

## Deploying the setup

With Deploying term I am meaning in that: setup the APP Link in your deskop.

Simply git clone this project and adjust it as per your needs then, create a symbolic link in your application folder `/usr/share/application/catalogo-cash.desktop`.

Sample:

Let's suppose you have the script relative path in your opt directory:

```bash
$ ln -s <your script full path> /usr/share/applications/<script file name>
```

In my case I had to do: 
```bash
$ ln -s /opt/app/loader/scripts/catalogo-cash.desktop /usr/share/applications/catalogo-cash.desktop
```

Then just browser your app's name that has been specified in the script and add it to your desktop.

# Conclusion

I am sure there could be easier ways to create links in your OS but this one I liked, feel free to send your PR to improve it and share your issues/questions in the issue panel if you have.

Now you have had the idea in how to create desktop application links in your Ubuntu OS, feel free to get the most of your computer and deploy your apps in your OS in a professional look.
