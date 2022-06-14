const express = require("express");
const db = require('../utils/db');

const router = express.Router();

router.all("/", (req, res) => {
	res.render("curriculo/index");
});

router.get("/alterar", (req, res) => {
	let id = req.query["id"];

	if (!id) {
		res.send("Id faltando");
		return;
	}

	const sql = "SELECT id, nome, email FROM pessoa WHERE id=?";

	console.log(sql);

	db.get(sql, [id], (err, row) => {
		if (err) {
			console.error(err.message);
			res.send("Erro: " + err.message);
			return;
		}

		res.render("funcionarios/form", { funcionario: row });
	});
});

router.post("/alterar", (req, res) => {
	let msg;
	let id = req.body["id"];
	let nome = req.body["nome"];
	let email = req.body["itens"]; //	!!!!!!!!!!

	if (!id) {
		res.send("Id faltando");
		return;
	}

	if (!nome) {
		res.send("Nome faltando");
		return;
	}

	if (!email) {
		res.send("itens faltando");
		return;
	}

	const sql = "UPDATE pessoa SET nome=?, itens=? WHERE id=?"; //!!!!!!!

	console.log(sql);

	db.run(sql, [nome, itens, id], (err, rows) => {  //!!!!!!
		if (err)
			msg = "Erro: " + err.message;
		else
			msg = "Usuário Alterado!";

		res.render("funcionarios/alterar", { mensagem: msg });
	});
});

router.all("/listar", (req, res) => {
	let pessoas;
	// let ordenar = req.query["ordenar"];
	// let params;

	

	const sql = "SELECT id, nome, itens FROM curriculo " ; //!!!!
	console.log(sql);

	db.all(sql, params, (err, rows) => {
		if (err) {
			console.error(err.message);
			res.send("Erro: " + err.message);
			return;
		}

		res.render("curriculo/listar", { model: rows });
	});
});

router.get("/remover", (req, res) => {
	let msg;
	let id = req.query["id"];

	const sql = "DELETE FROM pessoa WHERE id=?";
	console.log(sql);

	db.all(sql, [id], (err, rows) => {
		if (err)
			msg = err.message;
		else
			msg = "Usuário Removido!";

		res.render("funcionarios/remover", { mensagem: msg });
	});
});

router.all("/inserir", (req, res) => {
	const id = req.query["id"];
	const nome = req.query["nome"];
	const email = req.query["itens"];

	if (!nome) {
		res.send("Nome faltando");
		return;
	}

	if (!itens) {
		res.send("itens faltando");
		return;
	}

	const sql = "INSERT INTO pessoa (nome, itens) VALUES (?, ?)";
	console.log(sql);

	db.run(sql, [nome, itens], (err, rows) => {
		if (err) {
			res.send("Erro: " + err.message);
			console.error(err.message);
			return;
		}

		res.render("funcionarios/inserir", { msg: mensagem });
	});
});

module.exports = router;
