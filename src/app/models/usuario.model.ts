export class Usuario {
    uid:string;
    email: string;
    nombre: string;
    rol:string;
    estado?:string;
    usuario_verificado:boolean;
    creado?:string;
    apellido?:string;
    genero?:  string;
    password?: string;
    password1?: string;
    carrera?: string;
    fechanacimiento?:Date;
    photoURL?:string;
    credencial?:[];
    grupos?:[];
}
