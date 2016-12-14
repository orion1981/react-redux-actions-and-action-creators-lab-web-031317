import expect from 'expect';
import { addMovie, deleteMovie, updateUsername, resetUsername} from '../src/actions';

describe('movie actions', function() {
  describe('adding a movie', function(){
    it('returns the add movies action', function() {
      let movie = {title: 'Ghostbusters', year: 2016}
      let action = addMovie(movie);
      expect(action.type).toEqual('ADD_MOVIE');
      expect(action.movie.title).toEqual('Ghostbusters');
    })
  })

  describe('deleting a movie', function(){
    it('returns the delete movies action', function() {
      let id = 5;
      let action = deleteMovie(id);
      expect(action.type).toEqual('DELETE_MOVIE');
      expect(action.id).toEqual(5);
    })
  })
})

describe('username actions', function(){
  describe('updating a username', function(){
    it('returns the update username action', function(){
      let action = updateUsername('Bob', 'Miles');
      expect(action.type).toEqual('UPDATE_USERNAME');
      expect(action.oldUsername).toEqual('Bob');
      expect(action.newUsername).toEqual('Miles');
    })
  })

  describe('resetting a username', function(){
    it('resets a username to default', function(){
      let action = resetUsername('Bob');
      expect(action.type).toEqual('RESET_USERNAME');
      expect(action.oldUsername).toEqual('Bob')
      expect(action.username).toEqual('default');
    })
  })
})
