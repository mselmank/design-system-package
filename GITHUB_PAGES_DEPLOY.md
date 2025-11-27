# 🚀 Paso a Paso: Deploy de Web App con GitHub Actions

## ✅ Cambios Ya Realizados

He preparado automáticamente:

1. ✅ **Configurado Vite** - Actualizado `vite.config.ts` con el base path correcto
2. ✅ **Creado workflow** - Archivo `.github/workflows/deploy.yml` configurado

---

## 📝 Pasos que Debes Seguir

### Paso 1: Hacer Commit y Push de los Cambios

```bash
# Asegúrate de estar en la raíz del proyecto
cd c:\Users\mselm\Documents\Github\fintual-ds-monorepo

# Ver los archivos modificados
git status

# Agregar todos los cambios
git add .

# Crear commit
git commit -m "feat: add GitHub Actions deployment workflow"

# Hacer push a GitHub
git push origin main
```

> **Nota**: Si tu branch principal es `master` en lugar de `main`, usa `git push origin master` y también actualiza el workflow en `.github/workflows/deploy.yml` (línea 5).

---

### Paso 2: Configurar GitHub Pages

1. **Ve a tu repositorio en GitHub**:
   - https://github.com/mselmank/fintual-ds-monorepo

2. **Ve a Settings** (Configuración):
   - Click en la pestaña "Settings" en el menú superior

3. **Configura Pages**:
   - En el menú lateral izquierdo, busca **"Pages"** (bajo "Code and automation")
   - En **"Source"**, selecciona: **"GitHub Actions"**
   - ¡Eso es todo! No necesitas configurar nada más

**Captura de pantalla de referencia:**
```
Settings → Pages → Source: GitHub Actions
```

---

### Paso 3: Verificar el Deployment

1. **Ve a la pestaña "Actions"** en tu repositorio:
   - https://github.com/mselmank/fintual-ds-monorepo/actions

2. **Observa el workflow ejecutándose**:
   - Verás un workflow llamado "Deploy Web App to GitHub Pages"
   - Click en él para ver el progreso en tiempo real
   - El proceso tiene 2 jobs:
     - ✅ **build** - Construye la aplicación
     - ✅ **deploy** - Despliega a GitHub Pages

3. **Espera a que complete** (usualmente toma 2-3 minutos)

4. **Accede a tu sitio**:
   - Una vez completado, tu sitio estará en:
   - **https://mselmank.github.io/fintual-ds-monorepo/**

---

## 🔄 Deployments Automáticos

Una vez configurado, **cada vez que hagas push a `main`**, el sitio se actualizará automáticamente:

```bash
# Haces cambios en apps/web
# ...

git add .
git commit -m "feat: update showcase"
git push origin main

# GitHub Actions automáticamente:
# 1. Instala dependencias
# 2. Construye la app
# 3. Despliega a GitHub Pages
```

---

## 🎯 También Puedes Ejecutar Manualmente

Si quieres desplegar sin hacer un commit:

1. Ve a: **Actions** → **Deploy Web App to GitHub Pages**
2. Click en **"Run workflow"** (botón a la derecha)
3. Selecciona el branch `main`
4. Click en **"Run workflow"** (verde)

---

## 🧪 Probar el Build Localmente (Opcional)

Antes de hacer push, puedes probar el build local:

```bash
cd apps/web
pnpm run build
pnpm run preview
```

Esto abrirá una vista previa en http://localhost:4173 con la versión de producción.

---

## ❓ Troubleshooting

### El workflow falla en "Install dependencies"

**Solución**: Asegúrate de que el archivo `pnpm-lock.yaml` esté en el repositorio.

```bash
git add pnpm-lock.yaml
git commit -m "chore: add pnpm lockfile"
git push
```

### El sitio muestra 404 o assets rotos

**Problema**: El base path está incorrecto.

**Solución**: Verifica que `vite.config.ts` tenga:
```typescript
base: '/fintual-ds-monorepo/',
```

El nombre debe coincidir **exactamente** con el nombre de tu repositorio.

### "GitHub Pages is currently disabled"

**Solución**: 
1. Ve a Settings → Pages
2. Asegúrate de que Source esté en "GitHub Actions"
3. Si no aparece la opción, verifica que tu repositorio sea público o tengas GitHub Pro

---

## 📊 Archivos Creados/Modificados

### Creados
- [`.github/workflows/deploy.yml`](file:///c:/Users/mselm/Documents/Github/fintual-ds-monorepo/.github/workflows/deploy.yml) - Workflow de GitHub Actions

### Modificados
- [`apps/web/vite.config.ts`](file:///c:/Users/mselm/Documents/Github/fintual-ds-monorepo/apps/web/vite.config.ts) - Agregado base path

---

## 🎉 Resultado Final

Una vez completados los pasos, tendrás:

✅ **Sitio en vivo**: https://mselmank.github.io/fintual-ds-monorepo/  
✅ **Deployments automáticos** en cada push a `main`  
✅ **Build reproducible** con GitHub Actions  
✅ **Hosting gratuito** con GitHub Pages

---

**¿Listo para continuar?** Ejecuta los comandos del **Paso 1** para hacer el commit y push, luego sigue con el **Paso 2** en GitHub.
