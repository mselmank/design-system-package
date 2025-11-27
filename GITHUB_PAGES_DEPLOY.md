# 🚀 Deploy Web App con GitHub Actions - Paso a Paso

## ✅ Archivos Configurados

1. ✅ `vite.config.ts` - Base path configurado
2. ✅ `.github/workflows/deploy.yml` - Workflow de GitHub Actions
3. ✅ Este archivo - Guía de deployment

---

## 📝 Pasos a Seguir

### Paso 1: Commit y Push

```bash
cd c:\Users\mselm\Documents\Github\fintual-ds-monorepo

git add .
git commit -m "feat: add GitHub Actions deployment workflow"
git push origin main
```

### Paso 2: Configurar GitHub Pages

1. Ve a: https://github.com/mselmank/design-system-package/settings/pages
2. En **"Source"**, selecciona: **"GitHub Actions"**
3. Guarda

### Paso 3: Verificar

1. Ve a: https://github.com/mselmank/design-system-package/actions
2. Espera que el workflow complete (2-3 minutos)
3. Visita: **https://mselmank.github.io/design-system-package/**

---

## 🔄 Deployments Automáticos

Cada push a `main` despliega automáticamente:

```bash
git add .
git commit -m "feat: update showcase"
git push origin main
# → Deploy automático en GitHub Actions
```

---

## 🧪 Test Local (Opcional)

```bash
cd apps/web
pnpm run build
pnpm run preview
```

Abre: http://localhost:4173

---

## ❓ Troubleshooting

### Assets rotos / 404
Verifica que `vite.config.ts` tenga:
```typescript
base: '/design-system-package/',
```

### Workflow falla
Asegúrate de que `pnpm-lock.yaml` esté en el repo:
```bash
git add pnpm-lock.yaml
git commit -m "chore: add lockfile"
git push
```

---

## 🎉 Resultado Final

✅ Sitio en vivo: https://mselmank.github.io/design-system-package/  
✅ Deployments automáticos  
✅ Hosting gratuito
