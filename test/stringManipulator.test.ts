/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */

import { expect } from 'chai';
import 'mocha';
import * as stringManipulator from '../src/exercises/stringManipulator';

describe('stringManipulator tests:', () => {
  it('Score as postfix, case 1', (done) => {
    const name = 'John Doe';
    const score = 1200;

    const expected = 'John Doe: 1200';
    const result: string = stringManipulator.scoreAsPostfix(score, name);

    expect(result).to.equal(expected);
    done();
  });

  it('Score as postfix, case 2', (done) => {
    const name = 'Jane Doe';
    const score = 1670;

    const expected = 'Jane Doe: 1670';
    const result: string = stringManipulator.scoreAsPostfix(score, name);

    expect(result).to.equal(expected);
    done();
  });

  it('Score as prefix, case 1', (done) => {
    const name = 'John Doe';
    const score = 1200;

    const expected = '1200: John Doe';
    const result: string = stringManipulator.scoreAsPrefix(score, name);

    expect(result).to.equal(expected);
    done();
  });

  it('Score as prefix, case 2', (done) => {
    const name = 'Jane Doe';
    const score = 1100;

    const expected = '1100: Jane Doe';
    const result: string = stringManipulator.scoreAsPrefix(score, name);

    expect(result).to.equal(expected);
    done();
  });

  it('All in lowercase, case 1', (done) => {
    const name = 'John Doe';
    const score = 1600;

    const expected = '1600: john doe';
    const result: string = stringManipulator.inLowerCase(score, name);

    expect(result).to.equal(expected);
    done();
  });

  it('All in lowercase, case 2', (done) => {
    const name = 'Jane Doe';
    const score = 1454;

    const expected = '1454: jane doe';
    const result: string = stringManipulator.inLowerCase(score, name);

    expect(result).to.equal(expected);
    done();
  });

  it('No whitespaces, case 1', (done) => {
    const name = 'John Doe';
    const score = 1200;

    const expected = '1200:JohnDoe';
    const result: string = stringManipulator.noWhitespace(score, name);

    expect(result).to.equal(expected);
    done();
  });

  it('No whitespaces, case 2', (done) => {
    const name = 'Jane Doe';
    const score = 1210;

    const expected = '1210:JaneDoe';
    const result: string = stringManipulator.noWhitespace(score, name);

    expect(result).to.equal(expected);
    done();
  });

  it('Backwards, case 1', (done) => {
    const value = 'John Doe';

    const expected = 'eoDnhoJ';

    const result: string = stringManipulator.backwards(value);
    expect(result).to.equal(expected);
    done();
  });

  it('Backwards, case 2', (done) => {
    const value = 'Jane Pupil';

    const expected = 'lipuPenaJ';
    const result: string = stringManipulator.backwards(value);

    expect(result).to.equal(expected);
    done();
  });

  it('To Array, case 1', (done) => {
    const value = 'John Doe';

    const expected = ['John', 'Doe'];
    const result: string[] = stringManipulator.toArray(value);

    expect(result.length).to.equal(expected.length);
    expect(result[0]).to.equal(expected[0]);
    expect(result[1]).to.equal(expected[1]);
    done();
  });

  it('To Array, case 2', (done) => {
    const value = 'Jane Doe';

    const expected = ['Jane', 'Doe'];
    const result: string[] = stringManipulator.toArray(value);

    expect(result.length).to.equal(expected.length);
    expect(result[0]).to.equal(expected[0]);
    expect(result[1]).to.equal(expected[1]);
    done();
  });

  it('To Map, case 1', (done) => {
    const value = 'John Doe';

    const expected = new Map();
    expected.set('John', 'Doe');
    const result: Map<string, string> = stringManipulator.toMap(value);

    expect(result.get('John')).to.equal(expected.get('John'));
    done();
  });

  it('To Map, case 2', (done) => {
    const value = 'Jane Doe';

    const expected = new Map();
    expected.set('Jane', 'Doe');
    const result: Map<string, string> = stringManipulator.toMap(value);

    expect(result.get('Jane')).to.equal(expected.get('Jane'));
    done();
  });
});
