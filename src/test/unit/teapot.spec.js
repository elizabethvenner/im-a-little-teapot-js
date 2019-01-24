/**
 * Created by elizabeth.venner on 11/05/2018.
 */

var chai = require('chai');
var teaSet = require('../../main/teapot');
var coffee = require('../../main/coffee');
var expect = chai.expect;

describe ('Teapot', () => {
    const myTeapot = new teaSet.Teapot(20, 20, 'curly', 'non-drip');
    const tea = new teaSet.Tea();
    const cuppaJoe = new coffee.Coffee('filtered', 'Nescafe');

    it ('will not make tea if coffee is given', () => {
        expect(() => {
            myTeapot.isTeaReady(cuppaJoe)
        }).to.throw('You can only put tea in a teapot!!!');
    });

    it('shouts when tea is ready', () => {
        tea.makeTea();
        expect(myTeapot.isTeaReady(tea)).to.equal("TIP ME OVER AND POUR ME OUT!!");
    });

});

describe('Tea', () => {

    const tea = new teaSet.Tea();

    it('starts with tea not ready', () => {
        expect(tea.checkTeaIsBrewed()).to.equal(false);
    });

    it('makes the tea', () => {
        expect(tea.makeTea()).to.equal(true);
    });

    it('returns true when tea is ready', () => {
        tea.makeTea();
        expect(tea.checkTeaIsBrewed()).to.equal(true);
    });

});

// describe('Height', () => {
//
//     it('is short if under 20', () => {
//         const height = new Height(15);
//         expect(height.checkIfShort()).to.equal(true);
//     });
//
//     it('is not short if over 20', () => {
//         const height = new Height(21);
//         expect(height.checkIfShort()).to.equal(false);
//     });
//
// });
//
// describe('Girth', () => {
//
//     it('is stout if under 20', () => {
//         const girth = new Girth(15);
//         expect(girth.checkIfStout()).to.equal(true);
//     });
//
//     it('is not stout if over 20', () => {
//         const girth = new Girth(21);
//         expect(girth.checkIfStout()).to.equal(false);
//     });
// });
