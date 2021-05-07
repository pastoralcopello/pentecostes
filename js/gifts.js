class Gift {
	constructor(name, description, color, codes) {
		this.name = name
		this.color = color
		this.description = description
		this.codes = codes
	}

	hasCode(code) {
		return this.codes.includes(code)
	}

	li() {
		const li = document.createElement('li')
		li.classList.add('li-dones')
		li.innerText = this.name
		li.style.background = this.color
		return li
	}

	randomCode() {
		return this.codes[Math.floor(Math.random() * 4)]
	}
}

const consejo = new Gift(
	'Consejo',
	'En el momento en el que lo acogemos y lo albergamos en nuestro corazón, el Espíritu Santo comienza a hacernos sensibles a su voz y a orientar nuestros pensamientos, nuestros sentimientos y nuestras intenciones según el corazón de Dios.\n\nNos conduce a dirigir nuestra mirada interior hacia Jesús, como modelo de nuestro modo de actuar y de relacionarnos con Dios Padre y con nuestros hermanos.',
	'#009688',
	['ve', 'ad', 'ng', 'te']
) // teal
const entendimiento = new Gift(
	'Entendimiento',
	'Este don del Espíritu Santo está relacionado con la fe.\n\nCuando el Espíritu Divino habita en nuestro corazón e ilumina nuestra mente, nos hace crecer día a día en la comprensión de lo que el Señor ha dicho y ha realizado.\n\nComprender las enseñanzas de Jesús, comprender el Evangelio, comprender la Palabra de Dios.',
	'#E64A19',
	['xc', 'ga', 'eq', 'wn']
) // orange
const sabiduria = new Gift(
	'Sabiduría',
	'La sabiduría como la gracia de poder ver cada cosa con los ojos de Dios: ver el mundo, ver las situaciones, las ocasiones, los problemas, todo, con los ojos de Dios.',
	'#D32F2F',
	['ea', 'gf', 'da', 'jh']
) // red
const fortaleza = new Gift(
	'Fortaleza',
	'Son muchos los hombres y mujeres que honran a nuestra Iglesia, porque son fuertes al llevar adelante su vida, su familia, su trabajo y su fe. Demos gracias al Señor por estos cristianos que viven una santidad oculta: es el Espíritu Santo quien les conduce.',
	'#673AB7',
	['mn', 'cd', 'rt', 'kb']
) // deep purple
const ciencia = new Gift(
	'Ciencia',
	'En el Génesis se pone de relieve que Dios se complace de su Creación, subrayando repetidamente la belleza y la bondad de cada cosa. Al término de cada jornada, está escrito: Y vio Dios que era bueno.\n\nSi Dios ve que la Creación es una cosa buena, es algo hermoso, también nosotros debemos asumir esta actitud. He aquí el don de ciencia que nos hace ver esta belleza; alabemos a Dios, démosle gracias por habernos dado tanta belleza.',
	'#00BCD4',
	['bg', 'as', 'za', 'vg']
) // cyan
const piedad = new Gift(
	'Piedad',
	'Este don indica nuestra pertenencia a Dios y nuestro vínculo profundo con Él, un vínculo que da sentido a toda nuestra vida y que nos mantiene firmes, en comunión con Él, incluso en los momentos más difíciles y tormentosos.\n\nSe trata de una relación vivida con el corazón: es nuestra amistad con Dios, que nos dona Jesús, una amistad que cambia nuestra vida y nos llena de entusiasmo, de alegría.',
	'#E91E63',
	['yu', 'qw', 'nb', 'lk']
) // pink
const temorDeDios = new Gift(
	'Temor de Dios',
	'Es el don del Espíritu que nos recuerda cuán pequeños somos ante Dios y su amor, y que nuestro bien está en abandonarnos con humildad, con respeto y confianza en sus manos. Esto es el temor de Dios: el abandono en la bondad de nuestro Padre que nos quiere mucho.',
	'#8BC34A',
	['us', 'vr', 'we', 'fa']
) // green

const gifts = [
	consejo,
	entendimiento,
	sabiduria,
	fortaleza,
	ciencia,
	piedad,
	temorDeDios,
]

function randomGift() {
	return gifts[Math.floor(Math.random() * gifts.length)]
}

function giftByName(name) {
	return gifts.find((gift) => gift.name == name)
}

function giftNameByCode(code) {
	return gifts.find((gift) => gift.hasCode(code))
}

function receivedGifts() {
	return JSON.parse(localStorage.receivedGifts)
}

function saveReceivedGifts(receivedGifts) {
	localStorage.receivedGifts = JSON.stringify(receivedGifts)
}

function hasGift(giftName) {
	return receivedGifts().includes(giftName)
}

function addGift(giftName) {
	saveReceivedGifts(receivedGifts().concat([giftName]))
}
