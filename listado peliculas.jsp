
<%@page contentType="text/html" pageEncoding="windows-1252"%>
<%@ page import= "java.util.*" %>
<%@ page import= "java.io.*" %>

<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Lista de ventas</title>
    <script languaje="javascript" type="text/javascript">
        window.history.go(1);
    </script>
    <style type="text/css" media="screen">
        <%@include file="estiloppal.css" %>
    </style>
</head>
<body>
<%!
    static String mensaje="";
    static String[] cadena;
        static String codigo,nombre,genero;
%>
<input type="checkbox" id="abrir-cerrar" name="abrir-cerrar" value="">
<label for="abrir-cerrar">&#9776; <span class="abrir">Abrir</span><span class="cerrar">Cerrar</span></label>
<div id="sidebar" class="sidebar">
    <ul class="menu">
        <li><a href="ingresarPeliculas.jsp">Ingresar Peliculas</a></li>
        <li><a href="horarios.jsp">Horarios</a></li>
        <li><a href="boleteria.jsp">Boleteria</a></li>
        <li><a href="listaVentas.jsp">Listado de Ventas</a></li>
        <li><a href="listaFunciones.jsp">Listado de Funciones y Peliculas</a></li>
        <li><a href="cerrar.jsp">Cerrar Sesión</a></li>
    </ul>
</div>
<section>
    <article>
        <table align="center" >
            <tr>
                <td>
                    <hr/>
                </td>
            </tr>
            <tr>
                <td style="text-align: center">
                    <h2>CINEMA NORTE</h2>
                </td>
            </tr>
            <tr>
                <td style="text-align: center">
                    <hr/>
                    <h1>Listado de peliculas</h1>
                </td>
            </tr>
            <tr>
                <td style="text-align: center">

                    <table class="paleBlueRows">

                        <tfoot>
                        <tr>
                            <td colspan="4">
                                <% out.println("Lista de Peliculas");
                                    out.println("<br>" + mensaje);
                                %>
                            </td>
                        </tr>
                        </tfoot>
                        <tbody>
                        <tr>
                            <td colspan="3">
                                <%
                                    File archivo=null;
                                    FileReader fr=null;
                                    BufferedReader br=null;
                                    try{
                                        archivo=new File("peliculas.txt");
                                        fr=new FileReader(archivo);
                                        br=new BufferedReader(fr);
                                        String linea;
                                        out.println("<table><tr><th>Código</th>"
                                                + "<th>nombre</th><th>genero</th>"
                                        );
                                        while((linea=br.readLine())!=null){
                                            cadena=linea.split(",");
                                            codigo=cadena[0];
                                            nombre=cadena[1];
                                            genero=cadena[2];
                                            out.println(
                                                    "<tr><td>" + codigo + "</td><td>" + nombre
                                                            + "</td><td>" + genero+ "</td><td</tr>"
                                            );
                                        }
                                        out.println("</table>");
                                        fr.close();
                                    }catch(Exception e){
                                        mensaje="No se puede listar";
                                    }
                                %>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </table>
    </article>
</section>
</body>
</html>