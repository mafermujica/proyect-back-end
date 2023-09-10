require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const Server = require('./models/server');

const server = new Server();

server.listen();


function scroll(e) {
	if (this.hash !== '') {
		e.preventDefault();

		const hash = this.hash;

		$('html, body').animate(
			{
				scrollTop: $(hash).offset().top,
			},
			800
		);
	}
}

// $('#navbar a').on('click', scroll);
// $('#reserva').on('click', scroll);
