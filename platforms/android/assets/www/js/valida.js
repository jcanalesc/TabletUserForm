var valida = {
	process: function(dict)
	{
		for (x in dict)
		{
			if (!this[x])
			{
				if (!this.default(dict[x]))
				{
					alert("Campo " + x + " está vacío.");
					return false;
				}
			}
			else
			{
				if(!this[x](dict[x]))
				{
					return false;
				}
			}
		}
		return true;
	},
	edad_old: function(txt)
	{
		var bool = /^[0-9]+$/.test(txt);
		if (!bool)
			alert("Edad incorrecta. Ingrese sólo números.");
		return bool;
	},
	edad: function(txt)
	{
		var bool = /^[0-9]{4}\-[0-9]{2}\-[0-9]{2}$/.test(txt); // yyyy-mm-dd
		if (!bool)
			alert("Fecha incorrecta: " + txt);
		return bool;
	},
	email: function(txt)
	{
		var re = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
		var bool = re.test(txt);
		if (!bool)
			alert("Email incorrecto. Ingrese un email válido.");
		return bool;
	},
	rut: function(txt)
	{
		var bool = /^[0-9]{1,2}\.?[0-9]{3}\.?[0-9]{3}-[0-9k]$/i.test(txt);
		if (bool)
		{
			var txt2 = txt.replace(".", "");
			var partes = txt2.split("-");
			var numero = partes[0].split("").reverse().join("");
			var dv = partes[1].toLowerCase();

			var mults = [2,3,4,5,6,7,2,3];
			var suma = 0;
			for (var i = 0; i < numero.length; i++)
			{
				suma += mults[i] * parseInt(numero[i]);
			}

			var res = 11 - (suma % 11);
			if (res == 10) res = "k";
			bool = (""+res == ""+dv);
		}
		
		if (!bool)
		{
			alert("Rut inválido. Ingrese un rut válido, con guión y dígito verificador correcto.");
		}
		return bool;
	},
	default: function(txt)
	{
		return txt.length > 0;
	}

}