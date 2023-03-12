// document.addEventListener('DOMContentLoaded', function () {
const navMobile = document.querySelector('.nav__mobile')
const navBtn = document.querySelector('.nav__button')
const allNavItems = document.querySelectorAll('.nav__mobile-links')
const navButtons = document.querySelectorAll('.nav__mobile--buttons')
const switchableButton = document.querySelector('.texts-section__time--slider')
const textTimeMonth = document.querySelector('.texts-section__time--month')
const textTimeYear = document.querySelector('.texts-section__time--year')
const cardYearSection = document.querySelector('.cards__year')
const cardMonthSection = document.querySelector('.cards')

const accordionCard = document.querySelector('.faq__cards-accordion--card')
// const accordionBtns = document.querySelector('.faq__cards-accordion--card-text--btn')
const accordionCardText = document.querySelectorAll('.faq__cards-accordion--card-text')

const handleNav = () => {
	navMobile.classList.toggle('nav--active')
	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			navMobile.classList.remove('nav--active')
		})
	})
	navButtons.forEach(item => {
		item.addEventListener('click', () => {
			navMobile.classList.remove('nav--active')
		})
	})
}

const handleSectionYear = () => {
	cardYearSection.classList.toggle('cards__year-active')
	cardMonthSection.classList.toggle('cards__month-inactive')
	textTimeYear.classList.toggle('texts-section__time--year-bold')
	textTimeMonth.classList.toggle('texts-section__time--month-bold')
}

function openAccordionItems() {
	if (this.nextElementSibling.classList.contains('faq__cards-accordion--card-info--active')) {
		this.nextElementSibling.classList.remove('faq__cards-accordion--card-info--active')
	} else {
		closeAccordionItems()
		this.nextElementSibling.classList.toggle('faq__cards-accordion--card-info--active')
	}
}

const closeAccordionItems = () => {
	const allActiveItems = document.querySelectorAll('.faq__cards-accordion--card-info')
	allActiveItems.forEach(item => item.classList.remove('faq__cards-accordion--card-info--active'))
}

const clickOutsideAccordion = e => {
	if (
		e.target.classList.contains('faq__cards-accordion--card-text') ||
		e.target.classList.contains('faq__cards-accordion--card-info') ||
		e.target.classList.contains('faq__cards-accordion--card-info-text')
	)
		return
	closeAccordionItems()
}

navBtn.addEventListener('click', handleNav)
switchableButton.addEventListener('click', handleSectionYear)
accordionCardText.forEach(btn => btn.addEventListener('click', openAccordionItems))
window.addEventListener('click', clickOutsideAccordion)
