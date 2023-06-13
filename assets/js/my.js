

$('document').ready(function() {

	const btn = document.getElementById('btn');
	const btn2 = document.getElementById('btn2');
	var view = false;
	const box = document.getElementsByClassName('more');
	var nbox = document.getElementsByClassName('more');
	//box.style.display = 'none';
	btn2.style.display = 'none';

	for (var i = 0; i < box.length; i++) {
		nbox = document.getElementsByClassName('more')[i];
		nbox.style.display = 'none';

	}

	btn.addEventListener('click', () => {
		// �️ hides element (still takes up space on page)
		//box.style.visibility = 'hidden';
		// �️ removes element from DOM

		if (view == true) {

			for (var i = 0; i < box.length; i++) {
				nbox = document.getElementsByClassName('more')[i];
				nbox.style.display = 'none';
			}
			btn2.style.display = 'none';
			//$("#btn").attr('value', 'ver menos');
			$("#btn").html('ver mais');
			view = false;
		} else {

			for (var i = 0; i < box.length; i++) {
				nbox = document.getElementsByClassName('more')[i];
				nbox.style.display = 'inline';
			}


			//$("#btn").attr('value', 'ver mais');
			$("#btn").html('ver menos');
			btn2.style.display = 'inline';
			view = true;

		}


	});

	btn2.addEventListener('click', () => {
		// �️ hides element (still takes up space on page)
		//box.style.visibility = 'hidden';
		// �️ removes element from DOM

		if (view == true) {

			for (var i = 0; i < box.length; i++) {
				nbox = document.getElementsByClassName('more')[i];
				nbox.style.display = 'none';
			}
			//$("#btn").attr('value', 'ver menos');
			btn2.style.display = 'none';
			$("#btn").html('ver mais');
			view = false;
		} else {
			for (var i = 0; i < box.length; i++) {
				nbox = document.getElementsByClassName('more')[i];
				nbox.style.display = 'inline';
			}
			//$("#btn").attr('value', 'ver mais');

			$("#btn").html('ver menos');
			view = true;

		}


	});


	/*
	$("#imagem").bind('mouseover',function(){
	    
		   $(this).animate({height:"200px",width:"200px"});
	   
	});
	$("#imagem").bind('mouseout',function(){
	    
		   $(this).animate({height:"76px",width:"75px"});
		  
	});
	*/

	// Get the modal
	var modal = document.getElementById("myModal");

	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var img = document.getElementById("imagem01");
	var modalImg = document.getElementById("img01");
	var captionText = document.getElementById("caption");
	img.onclick = function() {
		modal.style.display = "block";
		modalImg.src = this.src;
		captionText.innerHTML = this.alt;
	}

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("modal")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
		modal.style.display = "none";
	}
	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
		modal.style.display = "none";
	}




});




function zoom(im) {

	// Get the modal
	var modal = document.getElementById("myModal");

	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var img = document.getElementById(im);
	var modalImg = document.getElementById("img01");
	var captionText = document.getElementById("caption");


	modal.style.display = "block";
	modalImg.src = img.src;
	captionText.innerHTML = img.alt;
}


var FormContato = document.getElementById("formContato");
var email = document.getElementById("email");
var nome = document.getElementById("nome");
var celular = document.getElementById("celular");
var message = document.getElementById("message");

//PEMITE APENAS NUMEROS NO CAMPO DE ID EXPECIFICADO 
$("#celular").keypress(function (event) {
    return /\d/.test(String.fromCharCode(event.keyCode)); 
 });

function validacaoEmail(field) {
	usuario = field.value.substring(0, field.value.indexOf("@"));
	dominio = field.value.substring(field.value.indexOf("@") + 1, field.value.length);

	if ((usuario.length >= 1) &&
		(dominio.length >= 3) &&
		(usuario.search("@") == -1) &&
		(dominio.search("@") == -1) &&
		(usuario.search(" ") == -1) &&
		(dominio.search(" ") == -1) &&
		(dominio.search(".") != -1) &&
		(dominio.indexOf(".") >= 1) &&
		(dominio.lastIndexOf(".") < dominio.length - 1)) {
		document.getElementById("lbl_msg").innerHTML = "E-mail válido";
		document.getElementById("lbl_msg").style.visibility = "hidden";
		//alert("E-mail valido");
		//FormContato.submit();
		mailme();
	}
	else {
		document.getElementById("lbl_msg2").innerHTML = "<font color='red'>E-mail inválido </font>";

	}
}



function validateFields() {
	if (nome.value == "" || celular.value == "" || message.value == "") {

		document.getElementById("lbl_msg").innerHTML = "Há campos obrigatórios em branco!";
		document.getElementById("lbl_msg").style.visibility = "visible";
	} else {
		//confirm_password.setCustomValidity('');
		document.getElementById("lbl_msg").innerHTML = "";
		document.getElementById("lbl_msg").style.visibility = "hidden";

		validacaoEmail(email);
	}
}

function verifyFields() {

	validateFields();

}


function mailme() {
	var actionn = "mailme";
	var _nome = document.getElementById('nome').value;
	var _celular = document.getElementById('celular').value;
	var _email = document.getElementById('email').value;
	var _message = document.getElementById('message').value;
	
	
    if (_email != null && _email != '' && _email.trim() != ''){ /*Validando que tem que ter valor pra buscar no banco*/
	 var urlAction = document.getElementById("formContato").action;
	 var elementos = document.getElementById("formContato").elements;
	 
	 $.ajax({
	      
	     url:urlAction,
	     method:"POST",
	     data:{nome:_nome,
	    	 celular:_celular,
	    	 email:_email,
	    	 message:_message
		},
		
	     success: function (response) {		 
		 
	    	var json = response;//JSON.parse(response);
			document.getElementById('lbl_msg2').innerHTML = json;
			  
			  
	     }
	     
	 }).fail(function(xhr, status, errorThrown){
	    alert('Erro: ' + xhr.responseText);
	 });
	
	
    }
    
    
    
}


