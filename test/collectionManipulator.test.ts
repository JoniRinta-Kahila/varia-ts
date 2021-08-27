/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */

import { expect } from 'chai';
import 'mocha';
import * as collectionManipulator from '../src/exercises/collectionManipulator';
import IPlayer from '../src/exercises/types/iPlayer';

describe('collectionManipulator tests:', () => {
  it('findOne(): happypath 1', (done) => {
    const data = ['foo', 'bar', 'baz'];
    const expected = 'foo';

    const result = collectionManipulator.findOne(data, expected);
    expect(result).to.equal(expected);
    done();
  });

  it('findOne(): happy path 2', (done) => {
    const data = ['foo', 'bar', 'baz'];
    const expected = 'bar';

    const result = collectionManipulator.findOne(data, expected);
    expect(result).to.equal(expected);
    done();
  });

  it('findOne(): not found returns an empty string', (done) => {
    const data = ['foo', 'bar', 'baz'];
    const parameter = 'foobar';
    const expected = '';

    const result = collectionManipulator.findOne(data, parameter);
    expect(result).to.equal(expected);
    done();
  });

  it('findAllByScore(): happy path 1', (done) => {
    const player1: IPlayer = {
      name: 'John Doe',
      score: 600,
    };

    const player2: IPlayer = {
      name: 'Jane Doe',
      score: 900,
    };

    const player3: IPlayer = {
      name: 'George Doe',
      score: 1200,
    };

    const data = [player1, player2, player3];
    const parameter = 900;
    const expected = player2;

    const result: IPlayer = collectionManipulator.findAllByScore(
      data,
      parameter
    );
    expect(result).to.equal(expected);
    done();
  });

  it('findAllByScore(): happy path 2', (done) => {
    const player1: IPlayer = {
      name: 'John Doe',
      score: 600,
    };

    const player2: IPlayer = {
      name: 'Jane Doe',
      score: 900,
    };

    const player3: IPlayer = {
      name: 'George Doe',
      score: 900,
    };

    const data = [player1, player2, player3];
    const parameter = 900;
    const expected = [player2, player3];

    const result: IPlayer[] = collectionManipulator.findAllByScore(
      data,
      parameter
    );
    // expect(result.length).to.equal(expected.length);
    expect(JSON.stringify(result)).to.equal(JSON.stringify(expected));
    done();
  });

  it('findAllByName(): happy path 1', (done) => {
    const player1: IPlayer = {
      name: 'John Doe',
      score: 600,
    };

    const player2: IPlayer = {
      name: 'Jane Doe',
      score: 900,
    };

    const player3: IPlayer = {
      name: 'John Moe',
      score: 900,
    };

    const data = [player1, player2, player3];
    const parameter = 'Doe';
    const expected = [player1, player2];

    const result: IPlayer[] = collectionManipulator.findAllByName(
      data,
      parameter
    );
    // expect(result.length).to.equal(expected.length);
    expect(JSON.stringify(result)).to.equal(JSON.stringify(expected));
    done();
  });

  it('findAllByName(): happy path 2', (done) => {
    const player1: IPlayer = {
      name: 'John Doe',
      score: 600,
    };

    const player2: IPlayer = {
      name: 'Jane Doe',
      score: 900,
    };

    const player3: IPlayer = {
      name: 'George Doe',
      score: 700,
    };

    const data = [player1, player2, player3];
    const parameter = 'Jane';
    const expected = [player2];

    const result: IPlayer[] = collectionManipulator.findAllByName(
      data,
      parameter
    );
    expect(result.length).to.equal(expected.length);
    expect(result).to.equal([player2]);
    done();
  });
});
