from flask import Blueprint, render_template

probabilidades_bp = Blueprint('probabilidades', __name__)

@probabilidades_bp.route('/ProbabilidadMedia')
def Media():
    return render_template('probabilidadmedia.html')

@probabilidades_bp.route('/ProbabilidadAlta')
def Alta():
    return render_template('probabilidadalta.html')

@probabilidades_bp.route('/ProbabilidadBaja')
def Baja():
    return render_template('probabilidadBaja.html')

@probabilidades_bp.route('/Mapa')
def Mapa():
    return render_template('MapaView.html')

@probabilidades_bp.route('/RA')
def RA():
    return render_template('RA.html')

@probabilidades_bp.route('/Danger')
def Danger():
    return render_template('Danger.html')
