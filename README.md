# Herein Website

## 部署步骤

### 1. 配置你的具体信息

#### 修改 CNAME 文件
编辑 `public/CNAME` 文件，将 `your-domain.com` 替换为你的实际域名。

#### 配置 basePath（如果需要）
如果你的仓库名不是 `username.github.io`，需要在 `next.config.mjs` 中取消注释并修改：
```javascript
basePath: '/your-repository-name',
assetPrefix: '/your-repository-name/',
```

### 2. 推送到 GitHub

```bash
# 添加远程仓库
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit"

# 推送到 main 分支
git push -u origin main
```

### 3. 配置 GitHub Pages

1. 进入仓库的 Settings
2. 找到 Pages 设置
3. Source 选择 "GitHub Actions"
4. 等待 GitHub Actions 工作流完成部署

### 4. 配置自定义域名

#### 在 DNS 提供商配置：

对于根域名（example.com）：
- 添加 A 记录指向：
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153

对于子域名（www.example.com）：
- 添加 CNAME 记录指向 `YOUR-USERNAME.github.io`

#### 在 GitHub 配置：
1. 在仓库 Settings > Pages 中
2. 在 Custom domain 输入你的域名
3. 勾选 Enforce HTTPS

### 5. 本地开发

```bash
# 安装依赖
npm install --legacy-peer-deps

# 开发模式
npm run dev

# 构建测试
npm run build

# 手动部署（需要先安装 gh-pages）
npm install --save-dev gh-pages
npm run deploy:gh-pages
```

## 注意事项

- 部署后需要等待几分钟才能访问
- HTTPS 证书可能需要 1 小时才能生效
- 如果域名无法访问，检查 DNS 配置是否正确
- GitHub Actions 会在每次推送到 main 分支时自动部署