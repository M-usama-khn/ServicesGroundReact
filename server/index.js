// const express = require('express');
import express from 'express';
import path, { dirname } from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import {aboutMetas , homeMetas , webMetas , mobileMetas , qaMetas , emailMetas , digitalMetas , seoMetas ,
    mediaMetas, uiuxMetas, bookMetas , contactMetas , privacyMetas , termMetas 
} from './metas.js'
// const { getPostById } = require('./stub/posts');
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;
const indexPath  = path.resolve(__dirname, '..', 'dist', 'index.html');

// static resources should just be served as they are
app.use(express.static(
    path.resolve(__dirname, '..', 'dist'),
    { maxAge: '30d' },
));
// here we serve the index.html page
app.get('/', (req, res, next) => {
    fs.readFile(indexPath, 'utf8', (err, htmlData) => {
        // if (err) {
        //     console.error('Error during file reading', err);
        //     return res.status(404).end()
        // }
     

        // inject meta tags
        htmlData = htmlData.replace(
            "<title>__TITLE__</title>",
            `<title>${homeMetas[0].title}</title>`
        )
        .replace('__METATITLE__', homeMetas[0].title)
        .replace('__META_DESCRIPTION__', homeMetas[0].description)
        .replace('__META_OG_DESCRIPTION__', homeMetas[0].description)
        .replace('__METAURL_OG_URL__', homeMetas[0].url)

        .replace('__META_OG_TITLE__', homeMetas[0].title)
        .replace('__META_twiter_DESCRIPTION__', homeMetas[0].description)
        .replace('__META_TWITER_TITLE__', homeMetas[0].title)
        .replace('__METASOURCE__', homeMetas[0].url)
         .replace('__METLINK__', homeMetas[0].url)
        return res.send(htmlData);
    });
});

app.get('/about', (req, res, next) => {
    fs.readFile(indexPath, 'utf8', (err, htmlData) => {
        htmlData = htmlData.replace(
            "<title>__TITLE__</title>",
            `<title>${aboutMetas[0].title}</title>`
        )
        .replace('__METATITLE__', aboutMetas[0].title)
        .replace('__META_DESCRIPTION__', aboutMetas[0].description)
        .replace('__META_OG_DESCRIPTION__', aboutMetas[0].description)
        .replace('__METAURL_OG_URL__', aboutMetas[0].url)

        .replace('__META_OG_TITLE__', aboutMetas[0].title)
        .replace('__META_twiter_DESCRIPTION__', aboutMetas[0].description)
        .replace('__META_TWITER_TITLE__', aboutMetas[0].title)
        .replace('__METASOURCE__', aboutMetas[0].url)
         .replace('__METLINK__', aboutMetas[0].url)
        return res.send(htmlData);
    });
});
app.get('/experties/web-development', (req, res, next) => {
    fs.readFile(indexPath, 'utf8', (err, htmlData) => {
        htmlData = htmlData.replace(
            "<title>__TITLE__</title>",
            `<title>${webMetas[0].title}</title>`
        )
        .replace('__METATITLE__', webMetas[0].title)
        .replace('__META_DESCRIPTION__', webMetas[0].description)
        .replace('__META_OG_DESCRIPTION__', webMetas[0].description)
        .replace('__METAURL_OG_URL__', webMetas[0].url)

        .replace('__META_OG_TITLE__', webMetas[0].title)
        .replace('__META_twiter_DESCRIPTION__', webMetas[0].description)
        .replace('__META_TWITER_TITLE__', webMetas[0].title)
        .replace('__METASOURCE__', webMetas[0].url)
         .replace('__METLINK__', webMetas[0].url)
        return res.send(htmlData);
    });
});

app.get('/experties/mobile-app-development', (req, res, next) => {
    fs.readFile(indexPath, 'utf8', (err, htmlData) => {
        htmlData = htmlData.replace(
            "<title>__TITLE__</title>",
            `<title>${mobileMetas[0].title}</title>`
        )
        .replace('__METATITLE__', mobileMetas[0].title)
        .replace('__META_DESCRIPTION__', mobileMetas[0].description)
        .replace('__META_OG_DESCRIPTION__', mobileMetas[0].description)
        .replace('__METAURL_OG_URL__', mobileMetas[0].url)

        .replace('__META_OG_TITLE__', mobileMetas[0].title)
        .replace('__META_twiter_DESCRIPTION__', mobileMetas[0].description)
        .replace('__META_TWITER_TITLE__', mobileMetas[0].title)
        .replace('__METASOURCE__', mobileMetas[0].url)
         .replace('__METLINK__', mobileMetas[0].url)
        return res.send(htmlData);
    });
});

app.get('/experties/quality-assurance', (req, res, next) => {
    fs.readFile(indexPath, 'utf8', (err, htmlData) => {
        htmlData = htmlData.replace(
            "<title>__TITLE__</title>",
            `<title>${qaMetas[0].title}</title>`
            )
            .replace('__METATITLE__', qaMetas[0].title)
            .replace('__META_DESCRIPTION__', qaMetas[0].description)
            .replace('__META_OG_DESCRIPTION__', qaMetas[0].description)
            .replace('__METAURL_OG_URL__', qaMetas[0].url)
    
            .replace('__META_OG_TITLE__', qaMetas[0].title)
            .replace('__META_twiter_DESCRIPTION__', qaMetas[0].description)
            .replace('__META_TWITER_TITLE__', qaMetas[0].title)
            .replace('__METASOURCE__', qaMetas[0].url)
             .replace('__METLINK__', qaMetas[0].url)
    
        return res.send(htmlData);
    });
});

app.get('/experties/email-marketing', (req, res, next) => {
    fs.readFile(indexPath, 'utf8', (err, htmlData) => {
        htmlData = htmlData.replace(
            "<title>__TITLE__</title>",
            `<title>${emailMetas[0].title}</title>`
            )
            .replace('__METATITLE__', emailMetas[0].title)
            .replace('__META_DESCRIPTION__', emailMetas[0].description)
            .replace('__META_OG_DESCRIPTION__', emailMetas[0].description)
            .replace('__METAURL_OG_URL__', emailMetas[0].url)
    
            .replace('__META_OG_TITLE__', emailMetas[0].title)
            .replace('__META_twiter_DESCRIPTION__', emailMetas[0].description)
            .replace('__META_TWITER_TITLE__', emailMetas[0].title)
            .replace('__METASOURCE__', emailMetas[0].url)
             .replace('__METLINK__', emailMetas[0].url)
    
        return res.send(htmlData);
    });
});

app.get('/experties/digital-marketing', (req, res, next) => {
    fs.readFile(indexPath, 'utf8', (err, htmlData) => {
        htmlData = htmlData.replace(
            "<title>__TITLE__</title>",
            `<title>${digitalMetas[0].title}</title>`
            )
            .replace('__METATITLE__', digitalMetas[0].title)
            .replace('__META_DESCRIPTION__', digitalMetas[0].description)
            .replace('__META_OG_DESCRIPTION__', digitalMetas[0].description)
            .replace('__METAURL_OG_URL__', digitalMetas[0].url)
    
            .replace('__META_OG_TITLE__', digitalMetas[0].title)
            .replace('__META_twiter_DESCRIPTION__', digitalMetas[0].description)
            .replace('__META_TWITER_TITLE__', digitalMetas[0].title)
            .replace('__METASOURCE__', digitalMetas[0].url)
             .replace('__METLINK__', digitalMetas[0].url)
    
        return res.send(htmlData);
    });
});

app.get('/experties/seo', (req, res, next) => {
    fs.readFile(indexPath, 'utf8', (err, htmlData) => {
        htmlData = htmlData.replace(
            "<title>__TITLE__</title>",
            `<title>${seoMetas[0].title}</title>`
            )
            .replace('__METATITLE__', seoMetas[0].title)
            .replace('__META_DESCRIPTION__', seoMetas[0].description)
            .replace('__META_OG_DESCRIPTION__', seoMetas[0].description)
            .replace('__METAURL_OG_URL__', seoMetas[0].url)
    
            .replace('__META_OG_TITLE__', seoMetas[0].title)
            .replace('__META_twiter_DESCRIPTION__', seoMetas[0].description)
            .replace('__META_TWITER_TITLE__', seoMetas[0].title)
            .replace('__METASOURCE__', seoMetas[0].url)
             .replace('__METLINK__', seoMetas[0].url)
    
        return res.send(htmlData);
    });
});

app.get('/experties/social-media', (req, res, next) => {
    fs.readFile(indexPath, 'utf8', (err, htmlData) => {
        htmlData = htmlData.replace(
            "<title>__TITLE__</title>",
            `<title>${mediaMetas[0].title}</title>`
            )
            .replace('__METATITLE__', mediaMetas[0].title)
            .replace('__META_DESCRIPTION__', mediaMetas[0].description)
            .replace('__META_OG_DESCRIPTION__', mediaMetas[0].description)
            .replace('__METAURL_OG_URL__', mediaMetas[0].url)
    
            .replace('__META_OG_TITLE__', mediaMetas[0].title)
            .replace('__META_twiter_DESCRIPTION__', mediaMetas[0].description)
            .replace('__META_TWITER_TITLE__', mediaMetas[0].title)
            .replace('__METASOURCE__', mediaMetas[0].url)
             .replace('__METLINK__', mediaMetas[0].url)
    
        return res.send(htmlData);
    });
});

app.get('/experties/ui-ux', (req, res, next) => {
    fs.readFile(indexPath, 'utf8', (err, htmlData) => {
        htmlData = htmlData.replace(
            "<title>__TITLE__</title>",
            `<title>${uiuxMetas[0].title}</title>`
            )
            .replace('__METATITLE__', uiuxMetas[0].title)
            .replace('__META_DESCRIPTION__', uiuxMetas[0].description)
            .replace('__META_OG_DESCRIPTION__', uiuxMetas[0].description)
            .replace('__METAURL_OG_URL__', uiuxMetas[0].url)
    
            .replace('__META_OG_TITLE__', uiuxMetas[0].title)
            .replace('__META_twiter_DESCRIPTION__', uiuxMetas[0].description)
            .replace('__META_TWITER_TITLE__', uiuxMetas[0].title)
            .replace('__METASOURCE__', uiuxMetas[0].url)
             .replace('__METLINK__', uiuxMetas[0].url)
    
        return res.send(htmlData);
    });
});

app.get('/book-an-appointment', (req, res, next) => {
    fs.readFile(indexPath, 'utf8', (err, htmlData) => {
        htmlData = htmlData.replace(
            "<title>__TITLE__</title>",
            `<title>${bookMetas[0].title}</title>`
            )
            .replace('__METATITLE__', bookMetas[0].title)
            .replace('__META_DESCRIPTION__', bookMetas[0].description)
            .replace('__META_OG_DESCRIPTION__', bookMetas[0].description)
            .replace('__METAURL_OG_URL__', bookMetas[0].url)
    
            .replace('__META_OG_TITLE__', bookMetas[0].title)
            .replace('__META_twiter_DESCRIPTION__', bookMetas[0].description)
            .replace('__META_TWITER_TITLE__', bookMetas[0].title)
            .replace('__METASOURCE__', bookMetas[0].url)
             .replace('__METLINK__', bookMetas[0].url)
    
        return res.send(htmlData);
    });
});

app.get('/contact-us', (req, res, next) => {
    fs.readFile(indexPath, 'utf8', (err, htmlData) => {
        htmlData = htmlData.replace(
            "<title>__TITLE__</title>",
            `<title>${contactMetas[0].title}</title>`
            )
            .replace('__METATITLE__', contactMetas[0].title)
            .replace('__META_DESCRIPTION__', contactMetas[0].description)
            .replace('__META_OG_DESCRIPTION__', contactMetas[0].description)
            .replace('__METAURL_OG_URL__', contactMetas[0].url)
    
            .replace('__META_OG_TITLE__', contactMetas[0].title)
            .replace('__META_twiter_DESCRIPTION__', contactMetas[0].description)
            .replace('__META_TWITER_TITLE__', contactMetas[0].title)
            .replace('__METASOURCE__', contactMetas[0].url)
             .replace('__METLINK__', contactMetas[0].url)
    
        return res.send(htmlData);
    });
});

app.get('/privacy-policy', (req, res, next) => {
    fs.readFile(indexPath, 'utf8', (err, htmlData) => {
        htmlData = htmlData.replace(
            "<title>__TITLE__</title>",
            `<title>${privacyMetas[0].title}</title>`
            )
            .replace('__METATITLE__', privacyMetas[0].title)
            .replace('__META_DESCRIPTION__', homeMetas[0].description)
            .replace('__META_OG_DESCRIPTION__', homeMetas[0].description)
            .replace('__METAURL_OG_URL__', privacyMetas[0].url)
    
            .replace('__META_OG_TITLE__', privacyMetas[0].title)
            .replace('__META_twiter_DESCRIPTION__', homeMetas[0].description)
            .replace('__META_TWITER_TITLE__', privacyMetas[0].title)
            .replace('__METASOURCE__', privacyMetas[0].url)
             .replace('__METLINK__', privacyMetas[0].url)
    
        return res.send(htmlData);
    });
});

app.get('/terms-and-conditions', (req, res, next) => {
    fs.readFile(indexPath, 'utf8', (err, htmlData) => {
        htmlData = htmlData.replace(
            "<title>__TITLE__</title>",
            `<title>${termMetas[0].title}</title>`
            )
            .replace('__METATITLE__', termMetas[0].title)
            .replace('__META_DESCRIPTION__', homeMetas[0].description)
            .replace('__META_OG_DESCRIPTION__', homeMetas[0].description)
            .replace('__METAURL_OG_URL__', termMetas[0].url)
    
            .replace('__META_OG_TITLE__', termMetas[0].title)
            .replace('__META_twiter_DESCRIPTION__', homeMetas[0].description)
            .replace('__META_TWITER_TITLE__', termMetas[0].title)
            .replace('__METASOURCE__', termMetas[0].url)
             .replace('__METLINK__', termMetas[0].url)
    
        return res.send(htmlData);
    });
});

// listening...
app.listen(PORT, (error) => {
    if (error) {
        return console.log('Error during app startup', error);
    }
    console.log("listening on " + PORT + "...");
});