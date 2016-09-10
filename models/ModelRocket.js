
//создаем прототип нашего объекта или модели
var RocketModel = Backbone.Model.extend({
    defaults:  {
        name: 'name',
        description: 'desc',
        size: 100
    },
    initialize: function() {},
    validate: function(attr) {
        if(!(attr.size > 0)){
            console.log('error size');
            return 'error size';
        }
    } 
});

var RocketsCollections = Backbone.Collection.extend({
    model: RocketModel,
    sortParam: 'size',
    sortMode: 1,
    comparator: function(a,b) {
        if(a.get(this.sortParam) > b.get(this.sortParam)){
            return -1*this.sortMode;
        }
        if(a.get(this.sortParam) < b.get(this.sortParam)){
            return this.sortMode;
        }
        return 0;
    }
});