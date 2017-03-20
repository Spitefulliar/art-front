<?php

namespace Articulmedia;

use Articulmedia\Entity\Table\CrewTable;
use Articulmedia\Entity\Table\ExpertiseTable;
use Core\Bitrix\Component\AjaxComponent;

class ExpertisesComponent extends AjaxComponent {
    
    protected function parseRequest() {}

    protected function executeAjaxComponent()
    {
        $this->addResponseData([
          'page' => [
              'digital' => [
                  'title' => '360<span class=\'digital__title__deg\'>o</span>',
                  'slogan' => 'У нас есть <br/>все для 360&deg; <br/>сервиса в digital',
                  'items' => $this->formatExpertise($this->getExpertise()),
              ],
          ],
        ]);
    }
    
    private function getExpertise() {
        
        $obExpertiseTable = new ExpertiseTable();
        $arExpertises = $obExpertiseTable->getList([
            'order' => ['SORT' => 'ASC'],
        ])->fetchAll();
        
        return $arExpertises;
    }
    
    private function formatExpertise($arExpertises) {
        $arFormattedExpertise = [];

        foreach ($arExpertises as $arExperties) {
            $arFormattedExpertise[] = [
                'id' => $arExperties['CODE'],
                'title' => $arExperties['NAME'],
                'position' => $arExperties['POSITION'],
                'popup' => [
                    'title' => mb_strtolower($arExperties['NAME'], 'UTF-8'),
                    'summary' => $arExperties['NOTE'],
                    'contentBlocks' => [
                        [
                            'heading' => $arExperties['CONTENT_1_TITLE'],
                            'content' => $arExperties['CONTENT_1'],
                        ],
                        [
                            'heading' => $arExperties['CONTENT_2_TITLE'],
                            'content' => $arExperties['CONTENT_2'],
                        ],
                        [
                            'heading' => $arExperties['CONTENT_2_TITLE'],
                            'content' => $arExperties['CONTENT_2'],
                        ],
                    ],
                    'crosses' => $this->getCrosses(),
                ],
            ];
        }

        return $arFormattedExpertise;
    }

    private function  getCrosses() {
        $arCrosses = [];

        foreach([1,2,3,4,5,6] as $k) {
            $arCrosses[] = [
                'type' => 'case',
                'code' => 'fox',
                'title' =>'fox',
                'image' => [
                    'desktop' => '/local/templates/articulmedia/img/case/case_logo.jpg',
                    'mobile' => '/local/templates/articulmedia/img/case/case_logo.jpg'
                ],
            ];
        }

        return $arCrosses;
    }
    
}