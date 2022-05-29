-- Geração de Modelo físico
-- Sql ANSI 2003 - brModelo.



CREATE TABLE Endereco (
rua varchar(30),
bairro varchar(30),
cidade varchar(30),
uf varchar(2),
numero int,
id_Endereco int PRIMARY KEY,
cEP int
)

CREATE TABLE Setor (
id_Setor int PRIMARY KEY,
nomeSetor varchar(30),
cnpj_Empresa varchar(14)
)

CREATE TABLE Funcionario (
pis varchar(11),
nome_Mae varchar(30),
salario numeric(7,2),
nome_Pai varchar(30),
cpf varchar(11),
contato int,
data_Nascimento date,
data_Admissao date,
data_Demissao date,
nomeFunc varchar(30),
ctps int PRIMARY KEY,
id_Setor int,
id_Endereco int,
id_Login int,
FOREIGN KEY(id_Setor) REFERENCES Setor (id_Setor),
FOREIGN KEY(id_Endereco) REFERENCES Endereco (id_Endereco)
)

CREATE TABLE Login (
nivel Varchar(30),
email Texto(50),
login varchar(30),
senha varchar(255),
id_Login int PRIMARY KEY
)

CREATE TABLE ADM (
contato int,
email varchar(50),
razao_Social varchar(30),
senha varchar(255),
imagem varchar(255),
cnpj_Empresa varchar(14) PRIMARY KEY,
id_Login int,
FOREIGN KEY(id_Login) REFERENCES Login (id_Login)
)

CREATE TABLE Escala (
id_Escala int PRIMARY KEY,
tipo varchar(30),
status varchar(30),
data date,
cnpj_Empresa varchar(14),
FOREIGN KEY(cnpj_Empresa) REFERENCES ADM (cnpj_Empresa)
)

CREATE TABLE ItensDia (
tipo varchar(30),
id_ItensDias int PRIMARY KEY,
id_Dias int,
ctps int,
FOREIGN KEY(ctps) REFERENCES Funcionario (ctps)
)

CREATE TABLE DiasEscala (
id_Dias int PRIMARY KEY,
dia date,
id_Escala int,
FOREIGN KEY(id_Escala) REFERENCES Escala (id_Escala)
)

ALTER TABLE Setor ADD FOREIGN KEY(cnpj_Empresa) REFERENCES ADM (cnpj_Empresa)
ALTER TABLE Funcionario ADD FOREIGN KEY(id_Login) REFERENCES Login (id_Login)
ALTER TABLE ItensDia ADD FOREIGN KEY(id_Dias) REFERENCES DiasEscala (id_Dias)
