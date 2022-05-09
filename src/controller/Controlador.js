
import { filmes } from "../model/filmes.js";

let message = '';


export const getIndex = async (req, res) => {
  setTimeout(() => {
    message = ''
  }, 1000)
  try {
    const listFilmes = await filmes.findAll();
    console.log(listFilmes);
    res.render("index.ejs", {
      listFilmes,
      message,
    });
  } catch (error) {
    res.send(error.message);
  }
};

export const getDetalhes = async (req, res) => {
  try {
    const filmesDetalhes = await filmes.findByPk(req.params.id);
    res.render("detalhes.ejs", {
      filmesDetalhes,
    });
  } catch (error) {
    res.send(error.message);
  }
};

export const getCadastro = async (req, res) => {
  let toggle = false;
  try {
    const filmesDetalhes = await filmes.findByPk(req.params.id);
   
    res.render("cadastro.ejs", {
      filmesDetalhes,  message
    });
    
  } catch (error) {
    res.send(error.message);
  }
};

export const getCriar = async (req, res) => {
  let toggle = false;
  try {
    const filme = req.body;
    if (!filme) {
      res.send("Campo vazio");
      res.redirect("/cadastro");
    } else {   
      await filmes.create(filme);
      res.redirect("/");
      message = 'Filme Cadastrtado com Sucesso!';
    }
  } catch (error) {
    res.send(error.message);
  }
};

export const getUpdate = async (req, res) => {
  try {
    const filme = req.body;
    if (!filme) {
      return res.redirect("/cadastro");
    }
    await filmes.create(filme);
    res.redirect("/");
  } catch (error) {
    res.send(error.message);
  }
};

export const getDeletar = async (req, res) => {
  try {
    await filmes.destroy({
      where: {
        id: req.params.id,
      },
    });
    message = 'Filme Excluido com Sucesso!'
    res.redirect("/");
  } catch (error) {
    res.send(error.message);
  }
};

export const getEditar = async (req, res) => {
  try {
    const filmeAtual = await filmes.findByPk(req.params.id);
  
    res.render("editar.ejs", {
      filmeAtual,
      message
    });
  } catch (error) {
    res.send(error.message);
  }
};

export const postEditar = async (req, res) => {
  try {
    const { nome_filme, diretor, sinopse, ano, duracao, img, iframe } =
      req.body;
    await filmes.update(
      {
        nome_filme: nome_filme,
        diretor: diretor,
        sinopse: sinopse,
        ano: ano,
        duracao: duracao,
        img: img,
        iframe: iframe,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    
    res.redirect("/");
    message = 'Filme Atualizado com sucesso!'
  } catch (error) {
    res.send(error.message);
  }
};
