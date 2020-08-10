export class UsuarioModel {
    uid:string;
    email: string;
    password: string;
    nombre: string;
    apellido:string;
    genero:  string;
    carrera?: string;
    rol:string;
    fechanacimiento?:Date;
    lugarnacimiento?:[];

}
