'use strict';
/* global Blockly, options, profiles, JST */
/* jshint sub:true */

/**
 * bq_piezo_buzzer code generation
 * @return {String} Code generated with block parameters
 */


Blockly.Arduino.bq_piezo_buzzer = function() {
	var dropdown_pin = this.getFieldValue('PIN');
	var dropdown_stat = this.getFieldValue('STAT');
	var delay_time = Blockly.Arduino.valueToCode(this, 'DURA', Blockly.Arduino.ORDER_ATOMIC);

//	Blockly.Arduino.setups_['setup_piezo_buzzer_' + dropdown_pin] = JST['bq_piezo_buzzer_setups']({
//		'dropdown_pin': dropdown_pin,
//		'dropdown_stat': dropdown_stat
//	});


	var code = JST['bq_piezo_buzzer']({
		'dropdown_pin': dropdown_pin,
		'dropdown_stat': dropdown_stat,
		'delay_time': delay_time
	});

	code = 'tone(' + dropdown_pin + ',' + dropdown_stat + ',' + delay_time + ');\ndelay(' + delay_time + ');\n';
	return code;
};


/**
 * bq_piezo_buzzer block definition
 * @type {Object}
 */
Blockly.Blocks.bq_piezo_buzzer = {
	category: Blockly.LANG_CATEGORY_BQ,
	helpUrl: 'http://github.com/bq/roboblock/tree/master/src/blocks/bq_piezo_buzzer',
	 /**
	  * bq_piezo_buzzer initialization
	  */
	init: function() {
		this.setColour(Blockly.LANG_COLOUR_BQ);
		this.appendDummyInput('')
		.appendField('Buzzer')
		.appendField(new Blockly.FieldImage('img/blocks/bqmod07.png', 208 * options.zoom, 140 * options.zoom))
		.appendField('PIN#')
		.appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN')
		.appendField('TONE')
		.appendField(new Blockly.FieldDropdown([
			['DO', '261'],
			['RE', '293'],
			['MI', '329'],
			['FA', '349'],
			['SOL', '392'],
			['LA', '440'],
			['SI', '494']
		]), 'STAT'); //523
		this.appendValueInput('DURA', Number)
		.setCheck(Number)
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField('Duration');

		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip('Piezo Buzzer');
	}
};

