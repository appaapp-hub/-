# 京都唐辛子 エジプトピクルス風ソース - ランディングページ

京都の唐辛子とエジプトの食文化が融合したホットスパイシーソースの商品紹介・お問い合わせ用ランディングページです。

---

## ローカルで動かす

```bash
npm install
npm run dev
```

ブラウザで http://localhost:5173 を開く。

---

## Vercel で無料公開する手順

Vercel を使うと、**無料**でこのサイトをインターネットに公開できます。以下のどちらかで進められます。

### 方法A：GitHub から公開（おすすめ）

1. **GitHub にリポジトリを作る**
   - [github.com](https://github.com) にログイン
   - 右上の **+** → **New repository**
   - 名前は何でもOK（例：`kyoto-sauce-lp`）
   - **Create repository** をクリック

2. **このプロジェクトを GitHub に上げる**
   - プロジェクトフォルダ（`プロジェクトA`）でターミナルを開く
   - 次を順に実行（初回だけ）：
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/あなたのユーザー名/リポジトリ名.git
   git push -u origin main
   ```
   - リポジトリ名・URL は、GitHub で作ったリポジトリのページに表示されているものをそのまま使う

3. **Vercel に登録してデプロイ**
   - [vercel.com](https://vercel.com) を開く
   - **Sign Up** → **Continue with GitHub** で GitHub アカウントと連携
   - **Add New…** → **Project**
   - **Import** で、さきほど作った GitHub リポジトリを選ぶ
   - **Framework Preset** は **Vite** のまま（自動検出されているはず）
   - **Root Directory** はそのまま
   - **Deploy** をクリック
   - 数分で完了し、**Your project has been deployed** と表示される
   - 表示された URL（例：`https://kyoto-sauce-lp-xxx.vercel.app`）が公開先です

4. **2回目以降**
   - GitHub に `git push` するたびに、Vercel が自動でビルドし直して同じURLで更新されます。

---

### 方法B：Vercel CLI で公開（GitHub を使わない）

1. **Vercel に登録**
   - [vercel.com](https://vercel.com) で **Sign Up**（メールまたは GitHub）

2. **Vercel CLI を入れる**
   - ターミナルで：
   ```bash
   npm install -g vercel
   ```

3. **プロジェクトフォルダでログイン＆デプロイ**
   - `プロジェクトA` で：
   ```bash
   cd "c:\Users\81708\プロジェクトA"
   vercel login
   vercel
   ```
   - 初回は質問に答える（すべて Enter でデフォルトでもOK）
   - 完了すると URL が表示される

4. **本番用にデプロイ**
   ```bash
   vercel --prod
   ```

---

## 環境変数（お問い合わせフォーム）

Formspree を使う場合、Vercel のプロジェクト設定で次を追加すると本番でも動きます。

- **Name:** `VITE_FORMSPREE_ENDPOINT`
- **Value:** `https://formspree.io/f/あなたのフォームID`

**Settings** → **Environment Variables** で追加し、**Redeploy** すれば反映されます。

---

## 技術スタック

- React 18 + TypeScript
- Vite
- Tailwind CSS
