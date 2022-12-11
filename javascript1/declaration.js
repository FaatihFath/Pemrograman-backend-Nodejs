/** 
 * membuat fungsi menghitung lingkaran.
 * fungsi dibuat dengan gaya function declaration
 * 
 * @param {number} radius (jari-jari)
 * @return {number} area (luas lingkaran)
*/
function hitungLuaslingkaran(jariJari){
    const PHI =3.14;
    const area = PHI * jariJari * jariJari;
    return area;
}

console.log(hitungLuaslingkaran(28));
console.log(hitungLuaslingkaran(12));
