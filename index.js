const puppeteer = require('puppeteer');
const fs = require('fs');
(async () => {
	const browser = await puppeteer.launch({
		headless: false,
		defaultViewport: null,
		slowMo: 10
	}); // default is true

	const page = await browser.newPage();
	// await page.goto('https://linkedin.com');
	await page.goto(
		'https://www.linkedin.com/search/results/people/?keywords=talent%20aquisition&origin=SWITCH_SEARCH_VERTICAL'
	);
	await page.once('load', () => console.log('Page loaded!'));
	// await page.type('#session_key', 'prateekrohilla4.pr@gmail.com');
	// await page.type('#session_password', '');
	// const loginBtn =  await page.$x("//button[@name='sign-in-form__submit-button']");

	// await page.click('.sign-in-form__submit-button');
	await page.click('.main__sign-in-link');
	await setTimeout(() => {
		console.log('waiting..');
	}, 2000);

	await page.waitForSelector('#username').then(() => {
		console.log('click');
	});
	await page.type('#username', 'prateekrohilla4.pr@gmail.com');
	await page.type('#password', '').then(() => console.log('input done'));

	await page.click('button').then(() => console.log('clicked!')).catch((err) => console.log(err));
	await setTimeout(() => {
		console.log('waiting..');
		page.screenshot({ path: 'link.png' });
	}, 5000);

	await page.waitForSelector('#main div div div:nth-child(1) div a').then(() => {
		page
			.evaluate(() => document.querySelector('#main > div > div > div:nth-child(1) > div > a').click())
			.then(() => console.log('clicked!'))
			.catch((err) => console.log(err));
	});
	await page.waitForSelector('div span span  a.app-aware-link').then(() => {
		console.log('link');
	});
	let num = await page.evaluate(() => {
		return document.querySelectorAll('div > span > span > a.app-aware-link')[0].href;
	});
	fs.writeFileSync('data.txt', num, 'utf8');
	//   await browser.close();
	await page
		.waitForSelector('button.artdeco-button')
		.then(() => {
			console.log('page');
		})
		.catch((err) => console.log(err));
	// await page
	// 	.evaluate(() => document.querySelector('.artdeco-pagination__button--next').click())
	// 	.then(() => {
	// 		console.log('next');
	// 	})
	// 	.catch((err) => {
	// 		page.evaluate(() => document.querySelector('.artdeco-pagination__button--next').click());
	// 		console.log(err);
	// 	});
	// let arr = await page
	// 	.evaluate(() => {
	// 		return document.querySelectorAll('.artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view');
	// 	})
	// 	.then(() => {
	// 		for (let i = 2; i < 11; i++) {
	// 			page.evaluate((i) =>
	// 				document.querySelectorAll('')[i].click()
	// 			);
	// 			page.evaluate((i) =>
	// 				document
	// 					.querySelector('.ml1.artdeco-button.artdeco-button--3.artdeco-button--primary.ember-view')
	// 					.click()
	// 			);
	// 		}
	// 	})
	// 	.catch((err) => console.log(err));
	
		await page
			.evaluate((i) => {
				document
					.querySelectorAll('.artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view')
					[7].click();
			})
			.then(() => {
				console.log("hello");
			})
			.catch((err) => {
				console.log(err);
			});

		
		await page.waitForTimeout(2000);
		
		await page
			.evaluate(() => {
				document.querySelectorAll("button")[2].click();
			})
			.then(() => {
				console.log('done');
			})
			.catch((err) => {
				console.log(err);
			});
			await page
			.evaluate((i) => {
				document
					.querySelectorAll('.artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view')
					[8].click();
			})
			.then(() => {
				console.log("hello");
			})
			.catch((err) => {
				console.log(err);
			});

		
		await page.waitForTimeout(2000);
		
		await page
			.evaluate(() => {
				document.querySelectorAll("button")[2].click();
			})
			.then(() => {
				console.log('done');
			})
			.catch((err) => {
				console.log(err);
			});
			await page
			.evaluate((i) => {
				document
					.querySelectorAll('.artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view')
					[9].click();
			})
			.then(() => {
				console.log("hello");
			})
			.catch((err) => {
				console.log(err);
			});

		
		await page.waitForTimeout(2000);
		
		await page
			.evaluate(() => {
				document.querySelectorAll("button")[2].click();
			})
			.then(() => {
				console.log('done');
			})
			.catch((err) => {
				console.log(err);
			});
			await page
			.evaluate((i) => {
				document
					.querySelectorAll('.artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view')
					[10].click();
			})
			.then(() => {
				console.log("hello");
			})
			.catch((err) => {
				console.log(err);
			});

		
		await page.waitForTimeout(2000);
		
		await page
			.evaluate(() => {
				document.querySelectorAll("button")[2].click();
			})
			.then(() => {
				console.log('done');
			})
			.catch((err) => {
				console.log(err);
			});
	// .evaluate(() =>
	// 	document.querySelector('.ml1.artdeco-button.artdeco-button--3.artdeco-button--primary.ember-view').click()
	// )
})();
