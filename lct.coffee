if Meteor.isClient
    _collection = new Meteor.Collection null

    @pagecount = () ->
        e = _collection.findOne {pagecount: {$exists: true}}
        if e?
            e.pagecount
        else
            0
    
    @pagecount.inc = () ->
            e = _collection.findOne {pagecount: {$exists: true}}
            if e?
                console.log e
                _collection.update {_id: e._id}, {$inc: {pagecount: 1}}
            else
                _collection.insert
                    pagecount: 1
