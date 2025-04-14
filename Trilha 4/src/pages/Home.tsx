import React, { useState } from "react";

interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
}

const Home: React.FC = () => {
  // Exercício 1: Buscar Usuário pelo ID
  const [searchId, setSearchId] = useState<string>("");
  const [userData, setUserData] = useState<IUser | null>(null);
  const [searchError, setSearchError] = useState<string>("");

  const handleSearch = async () => {
    setSearchError("");
    setUserData(null);

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${searchId}`
      );
      if (!response.ok) {
        throw new Error("Usuário não encontrado.");
      }
      const data: IUser = await response.json();
      setUserData(data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setSearchError(error.message);
      } else {
        setSearchError("Erro desconhecido.");
      }
    }
  };

  // Exercício 2: Criar um Novo Usuário
  const [newUserName, setNewUserName] = useState<string>("");
  const [newUserEmail, setNewUserEmail] = useState<string>("");
  const [postResult, setPostResult] = useState<string>("");

  const handleCreateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPostResult("");

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: newUserName,
            email: newUserEmail,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao criar usuário.");
      }
      await response.json();
      setPostResult("Usuário criado com sucesso!");
      setNewUserName("");
      setNewUserEmail("");
    } catch (error: unknown) {
      if (error instanceof Error) {
        setPostResult(error.message);
      } else {
        setPostResult("Erro desconhecido.");
      }
    }
  };

  return (
    <div>
      <h1>Bem-vindo ao Sistema de Reservas de Hotel</h1>
      <hr />

      {/* Exercício 1: Buscar Usuário pelo ID */}
      <h2>Exercício 1: Buscar Usuário pelo ID</h2>
      <input
        type="text"
        placeholder="Digite o ID do usuário"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
      {searchError && <p style={{ color: "red" }}>{searchError}</p>}
      {userData && (
        <div>
          <p>
            <strong>Nome:</strong> {userData.name}
          </p>
          <p>
            <strong>Email:</strong> {userData.email}
          </p>
        </div>
      )}

      <hr />

      {/* Exercício 2: Criar um Novo Usuário */}
      <h2>Exercício 2: Criar um Novo Usuário</h2>
      <form onSubmit={handleCreateUser}>
        <input
          type="text"
          placeholder="Nome do usuário"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email do usuário"
          value={newUserEmail}
          onChange={(e) => setNewUserEmail(e.target.value)}
          required
        />
        <button type="submit">Cadastrar</button>
      </form>
      {postResult && <p>{postResult}</p>}
    </div>
  );
};

export default Home;
