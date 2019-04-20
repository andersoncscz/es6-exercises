/* 
    Set is a data structure that doesn't allow us to put duplicate elements in the collection.
    If there's already a reference of this element, the collection will ignore it

    Features of this exercise: 
        - add a music
        - remove a music
        - remove all musics
    
*/

const song1 = { title: 'Nothing else matters', author: 'Metallica'}
const song2 = { title: 'Enter Sandman', author: 'Metallica'}
const song3 = { title: 'Come as you are', author: 'Nirvana'}
const song4 = { title: 'Heart-Shaped Box', author: 'Nirvana'}
const song5 = { title: 'In The End', author: 'Linkin Park'}

//Initialize Set with some songs
const playList = new Set([song1, song2, song3, song4, song5]);

//Trying to add songs that already exists in playList. They're going to be ignored.
playList.add(song1)
playList.add(song2)
playList.add(song3)

//Removing a song
playList.delete(song4)

//Size of the playList
console.log('Size: ', playList.size)


//Printing the current playList
for (const song of playList) {
    console.log(song)
}

//Clear the entire playList after cleaning.
playList.clear()
console.log('Size: ', playList.size)