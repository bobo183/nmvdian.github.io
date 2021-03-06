define(['view/appView',
        'view/settingView',
        'view/aboutView',
        'view/feedbackView',
        'view/timelineView',
        'view/itemView',
        'view/postView',
        'view/contactView',
        'view/commentView',
        'view/messageView',
        'view/languageView',
        'view/loadingView',
        'view/homeView'],function(appView,settingView,aboutView,feedbackView,timelineView,itemView,postView,contactView,commentView,messageView,languageView,loadingView,homeView) {

    var module = {

        module: function(name){

            var view;

            switch (name){
                case 'appView':
                    view = appView;
                    break;
                case 'settingView':
                    view = settingView;
                    break;
                case 'aboutView':
                    view = aboutView;
                    break;
                case 'feedbackView':
                    view = feedbackView;
                    break;
                case 'timelineView':
                    view = timelineView;
                    break;
                case 'itemView':
                    view = itemView;
                    break;
                case 'postView':
                    view = postView;
                    break;
                case 'contactView':
                    view = contactView;
                    break;
                case 'commentView':
                    view = commentView;
                    break;
                case 'messageView':
                    view = messageView;
                    break;
                case 'languageView':
                    view = languageView;
                    break;
                case 'loadingView':
                    view = loadingView;
                    break;
                case 'homeView':
                    view = homeView;
                    break;
                    
                    
            }

            return view;
        }

    };

    return module;
});