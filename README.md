# Brunch with Eggs and Bacon

![](https://a248.e.akamai.net/camo.github.com/1c7212d12d1b170a4247587d46fa1c8a234538d0/687474703a2f2f662e636c2e6c792f6974656d732f3150343031313356326a336830563375305433532f363837343734373033613266326636643635366336353739363136633265363636633738363432653639373432663638376136363633356633353331333232653661373036372e6a706567)

My favorite brunch, fat and tasty!

[Twitter Bootstrap](http://twitter.github.com/bootstrap/) Javascript skeleton for [Brunch.io](http://brunch.io) with support for [SASS](http://sass-lang.com/), [LESS](http://lesscss.org/) and [Handlebars](http://handlebarsjs.com/). Also includes [Backbone.Mediator](https://github.com/chalbert/Backbone-Mediator) for Pub/Sub patterns.

## Getting started

Make sure to have [Brunch.io](http://brunch.io) installed.

Create your project using Eggs and Bacon with:

		brunch new <your-project-name> -s github://nezoomie/brunch-eggs-and-bacon
		
Or simply copy the repository on your hard drive and rename it.

## Customize Bootstrap Stylesheets

All Bootstrap stylesheet files can be found separated into:

		vendor/styles/bootstrap
		
They're in original [LESS](http://lesscss.org/) format in order to be easily customized, and compiled together with the app build.

## Exclude Bootstrap jQuery plugins

jQuery plugins used by Bootstrap are all listed (in the right order) inside the config.coffee file. Comment the ones you want to exclude from the build with a #. (Pay attention to dependencies!)

