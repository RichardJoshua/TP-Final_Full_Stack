var pool = require('./bd');

/* sirve para listar las novedades */
async function getNovedades() {
    var query = 'select * from novedades';
    var rows = await pool.query(query);
    return rows;
}

/* sirve para eliminar registro de las novedades */
async function deleteNovedadesById(id){
    var query = 'delete from novedades where id = ?';
    var rows = await pool.query(query, [id]);
    return rows;
}

async function insertNovedad(obj) {
    try{
        var query = "insert into novedades set ?";
        var rows = await pool.query(query,[obj])
        return rows;

    }catch (error) {
        console.log(error);
        throw error;
    }//cierre catch
}//cierre insert


async function getNovedadById(id) {
    var query = "select * from novedades where id=?";
    var rows = await pool.query(query, [id]);
    return rows[0];
}


async function modificarNovedadById(obj, id) {
    try {
        var query = "update novedades set ? where id=?";
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        throw error;        
    }
} // cierre modificar & update

async function buscarNovedades(busqueda) {
    var query = "select * from novedades where titulo like ? OR subtitulo like ? or cuerpo like ?";
    var rows = await pool.query(query,['%' + busqueda + '%', '%' + busqueda + '%', '%' + busqueda + '%']);
    return rows;
}

module.exports = { getNovedades, deleteNovedadesById, insertNovedad, getNovedadById, modificarNovedadById, buscarNovedades }