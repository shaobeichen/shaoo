# shaoo

1. 安装 pnpm
2. npm init
3. 修改 package.json, 包管理器限制

```
{
  // 只允许使用pnpm来开发
  // preinstall: 在install之前（首次）执行
  // postinstall: 在install之后（首次）执行
  "scripts": {
    "preinstall": "npx only-allow pnpm"
  },
  // 防止最外层包被发布出去，设为true以后发布时会提醒你
  "private": true,
  "engines": {
    "node": ">=16"
  }
}
```

4. 手动添加 pnpm-workspace.yaml

```bash
packages:
  - 'packages/**'
```

5. 添加 packages 文件夹
6. 添加一个子包 test-share
7. 进入子包 pnpm init
8. 修改 package.json

```json
{
  "publishConfig": {
    "access": "public"
  }
}
```

9. 子包名叫 @shaoo/test-share
10. 添加一个子包 test
11. 进入子包 pnpm init 同时修改 package.json
12. 子包名叫 @shaoo/test
13. test 里添加依赖

```bash
pnpm -F @shaoo/test add @shaoo/test-share
```

```
{
  "@shaoo/test-share": "workspace:*"
}
```

14. 登录 npm

```bash
npm login
```

15. 安装发包依赖

```bash
pnpm install @changesets/cli -w  --save-dev
pnpm changeset init
```

16. 预发布

```bash
pnpm changeset pre enter <tag>
# alpha	是内部测试版，一般不向外部发布，会有很多Bug，一般只有测试人员使用
# beta	也是测试版，这个阶段的版本会一直加入新的功能。在Alpha版之后推出
# rc	(Release　Candidate) 发行候选版本。RC版不会再加入新的功能了，主要着重于除错

pnpm changeset
# major minor patch
# 1.0.0
pnpm changeset version
pnpm changeset publish
# error an error occurred while publishing @shaoo/test:
# error  '@shaoo/test@1.0.0' is not in this registry.
# npm规定包名中，@后是用户名 或者是组织
pnpm changeset pre exit

```

17. 正式发布

```bash
pnpm changeset
pnpm changeset version
pnpm changeset publish
```
