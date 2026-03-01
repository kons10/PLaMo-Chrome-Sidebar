# PLaMo-Chrome-Sidebar

Chromeのサイドパネルで **PLaMo (Preferred Language Model)** による翻訳をサクッと利用するための拡張機能です。


## 🌟 特徴

- **サイドパネル統合**: ブラウザの横に常駐するので、タブを切り替えずに翻訳が可能。
- **PLaMo 翻訳**: 高精度な PLaMo 翻訳（[app.translate.preferredai.jp](https://app.translate.preferredai.jp/)）をそのまま利用。
- **スムーズな埋め込み**: `declarativeNetRequest` を使用した CSP 解除により、サイドパネル内での安定した表示を実現。

## 🚀 導入方法（開発者モード）

現在ストアには公開していないため、以下の手順で手動インストールしてください。

1. このリポジトリをクローンするか、ZIPでダウンロードして解凍する。
2. Google Chrome で `chrome://extensions/` を開く。
3. 右上の **「デベロッパー モード」** をオンにする。
4. **「展開して読み込む」** をクリックし、このリポジトリのフォルダを選択する。

## 💡 使い方

1. ブラウザのツールバーにある拡張機能アイコンをクリック。
2. サイドパネルに PLaMo 翻訳画面が表示されます。
3. 翻訳したい文章を入力して、高精度な翻訳を体験してください。

## 🛠️ 技術構成

- **Manifest V3**: 最新の Chrome 拡張機能仕様。
- **Side Panel API**: ブラウザ標準のサイドパネル機能を利用。
- **Declarative Net Request**: `rules.json` を通じてレスポンスヘッダーを制御し、iframe 内での表示制限をバイパスしています。


Developed by **kons10** (汐)

---

# PLaMo-Chrome-Sidebar

An extension that allows you to quickly use **PLaMo (Preferred Language Model)** for translation through Chrome's side panel.


## 🌟 Key Features

- **Side Panel Integration**: Stays permanently visible alongside your browser, enabling translation without switching tabs.
- **PLaMo Translation**: Utilizes the high-accuracy translation capabilities of PLaMo directly from [app.translate.preferredai.jp](https://app.translate.preferredai.jp/).
- **Seamless Embedding**: Implements CSP bypass using `declarativeNetRequest` to ensure stable rendering within the side panel.

## 🚀 Installation Guide (Developer Mode)

Since the extension isn't currently published on the Chrome Web Store, please follow these manual installation steps:

1. Clone this repository or download the ZIP file and extract it.
2. Open `chrome://extensions/` in Google Chrome.
3. Enable **"Developer Mode"** in the top-right corner.
4. Click **"Load unpacked"** and select the folder from this repository.

## 💡 How to Use

1. Click the extension icon in your browser toolbar.
2. The PLaMo translation interface will appear in the side panel.
3. Enter the text you want to translate and enjoy high-precision translation results.

## 🛠️ Technical Architecture

- **Manifest V3**: Complies with the latest Chrome extension specification.
- **Side Panel API**: Leverages the browser's native side panel functionality.
- **Declarative Net Request**: Controls response headers through `rules.json` to bypass restrictions that normally prevent rendering within iframes.



Developed by **kons10** (汐)
