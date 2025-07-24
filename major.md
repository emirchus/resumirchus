# 🛠️ Feedback de mejora para Resumirchus

## ✅ Lo que funciona bien (según la comunidad)
- UI moderna, limpia e intuitiva.
- Funcionalidad AI para mejorar resumen (`summary`).
- Plataforma responsive y funciona como PWA.
- Gratuito, sorprende positivamente.
- Compatible con sistemas ATS.
- Roadmap público con visión de futuro.

---

## 🐞 Errores / Cosas a corregir

### 1. Validaciones en fechas de experiencia y educación
- Se pueden seleccionar fechas de **inicio en el futuro**.
- También se puede establecer una fecha de **fin anterior al inicio**.
- El toggle para indicar trabajo/estudio actual no es lo suficientemente claro.

### 2. Inputs decorativos mal implementados
- En algunos campos, al escribir en el label no se enfoca automáticamente el input.

### 3. Función AI para Summary
- El botón **Enhance** acorta progresivamente el texto si se usa varias veces.
- No se explican los cambios realizados por la AI → sería útil para aprendizaje/corrección.
- **Confusión entre "Enhance" y "Generate"**: debería ocultarse "Generate" si ya hay texto.

### 4. Sección de Skills
- Límite de **5 skills por categoría** se siente muy restrictivo.
- Forzar categorizar las skills puede ser innecesario.
- Limita el uso de keywords importantes para ATS.

### 5. Eliminaciones sin confirmación
- No hay ventana de confirmación al eliminar experiencias, skills, etc.
- Esto puede provocar pérdida accidental de datos importantes.

### 6. Campos limitados en experiencia laboral
- Solo hay “descripción”.
- Sería útil agregar:
  - Actividades realizadas
  - Tecnologías/softwares usados
  - Proyectos destacados
  - Motivo de salida (opcional)

### 7. Campos tipo "title"
- Algunos títulos podrían funcionar mejor como **labels editables** (ej: idiomas).

---

## 🌱 Ideas y sugerencias para evolucionar

### AI y mejora de contenido
- Aplicar AI también para pulir **descripciones de experiencias laborales**.
- Mostrar de forma visual o textual los cambios sugeridos por la AI.

### LinkedIn y automatización
- Permitir ingresar el perfil de LinkedIn y **extraer datos automáticamente**.
- Aunque requiere autenticación, se valoró mucho como posible iteración futura.

### UI/UX
- Agregar íconos automáticos al detectar URLs (LinkedIn, GitHub, etc).
- Soporte para **drag & drop** para reordenar secciones.
- Mejor claridad para la función "trabajo actual" sin necesidad de leer instrucciones.

### Gestión y escalabilidad
- Soporte para **varios CVs por usuario** (según oferta laboral).
- Historial de cambios o versiones.
- Límite de peticiones a la AI ya implementado (10 diarias).

---

## 💡 Extras mencionados
- Crear un formato tipo "DNI laboral" estandarizado.
- Permitir elegir idioma para los títulos (ya aclaraste que se puede).
- Pregunta frecuente sobre monetización y sostenibilidad del proyecto.

---

🎉 **¡Gran validación general del proyecto!**
Muchos lo encuentran útil, fácil de usar y con mucho potencial para seguir creciendo. 🚀
