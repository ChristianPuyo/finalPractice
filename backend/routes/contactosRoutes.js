const express = require('express');
const contactos = require('../models/contactos');
const router = express.Router();

// Crear contacto
router.post('/', async (req, res) => {
    try {
        const { name, Phonenumber, email } = req.body;
        const contact = await contactos.create({ name, Phonenumber, email });
        res.status(201).json(contact);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Leer todos los contactos
router.get('/', async (req, res) => {
    try {
        const contacts = await contactos.findAll();
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Leer contacto por ID
router.get('/:id', async (req, res) => {
    try {
        const contact = await contactos.findByPk(req.params.id);
        if (contact) {
            res.json(contact);
        } else {
            res.status(404).json({ error: 'Contact not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Actualizar contacto
router.put('/:id', async (req, res) => {
    try {
        const { name, Phonenumber, email } = req.body;
        const [updated] = await contactos.update(
            { name, Phonenumber, email },
            { where: { id: req.params.id } }
        );
        if (updated) {
            const updatedContact = await contactos.findByPk(req.params.id);
            res.json(updatedContact);
        } else {
            res.status(404).json({ error: 'Contact not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Eliminar contacto
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await contactos.destroy({ where: { id: req.params.id } });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Contact not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;

