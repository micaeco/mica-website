import Markdown from '@/src/components/ui/Markdown';

const privacyPolicy = `
# Política de Privacidad- Version 0.1 [02/08/2024] 

## 1. Introducción

En MICA.ECO  valoramos la privacidad de nuestros usuarios y nos comprometemos a proteger sus datos personales. Esta política de privacidad describe cómo recopilamos, utilizamos, almacenamos y protegemos la información personal proporcionada por los usuarios que se registran en nuestro programa beta de sensores inteligentes.

## 2. Resumen de Puntos Clave

**Recopilación de Datos:** Recopilamos solo la información necesaria , la de contacto básica y, en caso de participación en el programa beta, datos adicionales necesarios para el desarrollo del mismo.
**Almacenamiento Seguro:** Toda la información personal se guarda en nuestro sistema ERP, que cumple con los más altos estándares de seguridad.
**Derechos del Usuario:** Los usuarios pueden acceder, modificar o eliminar su información directamente desde nuestro sitio web.
**Notificación de Cambios:** Cualquier cambio en esta política será comunicado por correo electrónico, requiriendo aceptación del usuario.

## 3. Información Recopilada

Recopilamos los siguientes datos personales de los usuarios:

**Datos de contacto:** nombre, ciudad, telefono y dirección de correo electrónico.
**Información adicional para el programa beta:** solo en el caso de que se confirme interes en participar en el  programa, tal como el tipo de vivienda, número de vecinos, y otros datos relevantes según el cuestionario proporcionado.
**Datos de facturacion y bancarios**: una vez se acepte la instalacion del contador , antes del envio se solicitara la informacion completa del cliente para poder realizar la facturacion y el cobro de los servicios, segun los terminos acordados en cada caso (los programas beta tienen un descuento muy relevante respecto al coste del producto/servicios)

## 4. Finalidad del Tratamiento de Datos

Utilizamos los datos recopilados para los siguientes propósitos:

- Inscribir a los usuarios en el programa beta y enviarles información relacionada.
- Solicitar información adicional necesaria para el desarrollo del programa beta.
- Enviar actualizaciones sobre el estado del producto y detalles de compra.
- Mejorar nuestros productos y servicios mediante la retroalimentación proporcionada por los usuarios.

## 5. Base Legal para el Tratamiento de Datos

El tratamiento de los datos personales se realiza con el consentimiento explícito del usuario, obtenido al momento del registro y aceptación de esta política de privacidad.

## 6. Almacenamiento y Seguridad de los Datos

Los datos personales se almacenan de manera segura en nuestro sistema ERP. Implementamos medidas técnicas y organizativas adecuadas para proteger la información contra accesos no autorizados, pérdida o destrucción, utilizando tecnologías de cifrado y control de acceso.

## 7. Derechos del Usuario

Los usuarios tienen derecho a:

**Acceso:** Consultar los datos personales que tenemos sobre ellos.
**Rectificación:** Modificar los datos incorrectos o incompletos.
**Eliminación:** Solicitar la eliminación de sus datos personales.
**Retiro del Consentimiento:** En cualquier momento, retirar su consentimiento para el tratamiento de sus datos.

Los usuarios pueden ejercer estos derechos directamente desde nuestro sitio web, donde podrán gestionar sus datos y recuperar contraseñas mediante la verificación por correo electrónico.

## 8. Notificación de Cambios en la Política de Privacidad

En caso de realizar cambios significativos en esta política de privacidad, notificaremos a los usuarios por correo electrónico. Se solicitará a los usuarios que revisen y acepten los cambios para continuar utilizando nuestros servicios. Asi mismo, se mantendrá siempre actualizada y accesible desde la web la version mas actualizada de nuestra politica proteccion de datos personales. 

## 9. Contacto

Para cualquier consulta o preocupación sobre esta política de privacidad, los usuarios pueden ponerse en contacto con nosotros a través del apartado de contacto de nuestra web, indicando claramente que se trata de un tema relacionado con la politica de privacidad de los datos personales
`;

export default function Latest() {
  return <Markdown content={privacyPolicy} />;
}
