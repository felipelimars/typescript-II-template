/* PRÁTICA GUIADA - Parte 1
Crie um sistema de cadastro de usuários que contenha:

1. Type Alias para uma pessoa (TPerson) com as propriedades id, name, email, password e role;
2. Type Aliases para 2 contas (AdminAccount, NormalAccount) com as propriedades account e permission;
3. Crie exemplos de usuários Admin e Normal;
*/

type Tperson = {
    id: string,
    name: string,
    email: string,
    password: string
}

enum USE_ROLE {
    ADMIN = "admin",
    NORMAL = "normal"
}

type AdminAccount = {
    account: string,
    permission: USE_ROLE.ADMIN
}

type NormalAccount = {
    account: string,
    permission: USE_ROLE.NORMAL
}

const userAdmin: AdminAccount = {
    account: "Felipe",
    permission: USE_ROLE.ADMIN
}

const userNormal: NormalAccount = {
    account: "Rodrigo",
    permission: USE_ROLE.NORMAL
}

type AdminUser = Tperson & AdminAccount
type NormalUser = Tperson & NormalAccount

const userComum: NormalUser = {
    id: "02",
    name: "Rodrigo",
    email: "rodrigo@email.com",
    password: "123456",
    account: "normal",
    permission: USE_ROLE.NORMAL,
}

const userAdm: AdminUser = {
    id: "01", 
    name: "Felipe",
    email: "felipe@email.com",
    password: "123456",
    account: "administrador",
    permission: USE_ROLE.ADMIN,
}

const users: Array<AdminUser | NormalUser> = [userAdm, userComum]

// Ou dessa forma 

/* const users: (AdminUser | NormalUser)[] = [
    const userComum: NormalUser = {
        id: "02",
        name: "Rodrigo",
        email: "rodrigo@email.com",
        password: "123456",
        account: "normal",
        permission: USE_ROLE.NORMAL,
    }
    
    const userAdm: AdminUser = {
        id: "01", 
        name: "Felipe",
        email: "felipe@email.com",
        password: "123456",
        account: "administrador",
        permission: USE_ROLE.ADMIN,
    }
] */

console.log(users)

/* PRÁTICA GUIADA - Parte 2
Vamos continuar nosso sistema de cadastro de usuários criando:

1. Enum com valores ADMIN e NORMAL e atribua ã propriedade role do Tperson;
2. Tipo Intersection unindo: pessoa(Person) + permissão (Role);
3. Um array de usuários que permite guardar apenas usuários do tipo Person + Role;

*/ 

